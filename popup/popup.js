// ─── Firebase 사용량 카운터 ────────────────────────────────
const FIREBASE_PROJECT = 'maplescouter-ocr';
const COUNTER_DOC = `projects/${FIREBASE_PROJECT}/databases/(default)/documents/stats/counter`;

async function trackApiCall() {
  try {
    await fetch(`https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT}/databases/(default)/documents:commit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        writes: [{
          transform: {
            document: COUNTER_DOC,
            fieldTransforms: [{
              fieldPath: 'count',
              increment: { integerValue: '1' }
            }]
          }
        }]
      })
    });
  } catch (_) {
    // 카운팅 실패는 사용자 경험에 영향 없이 무시
  }
}

// ─── 탭 전환 ─────────────────────────────────────────────
document.querySelectorAll('.tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach((t) => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach((c) => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab).classList.add('active');

    if (tab.dataset.tab === 'list') loadBookmarkList();
    if (tab.dataset.tab === 'ocr') loadSettings();
  });
});

// ─── 페이지 상태 확인 ─────────────────────────────────────
async function checkPageStatus() {
  const statusBar = document.getElementById('statusBar');
  const statusText = document.getElementById('statusText');

  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab.url || !tab.url.includes('maplescouter.com')) {
      statusBar.className = 'status-bar error';
      statusText.textContent = '⚠ maplescouter.com에 접속 후 사용하세요';
      return false;
    }
    statusBar.className = 'status-bar ok';
    statusText.textContent = '✓ maplescouter.com 연결됨';
    return true;
  } catch (e) {
    statusBar.className = 'status-bar error';
    statusText.textContent = '⚠ 페이지 상태 확인 실패';
    return false;
  }
}

// ─── 웹페이지 스크립트 실행 (localStorage 접근) ────────────
async function execInPage(func, args = []) {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const results = await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func,
    args,
  });
  return results[0].result;
}

async function addBookmarkToPage(item) {
  return execInPage((newItem) => {
    try {
      const raw = localStorage.getItem('equipBookmarkList');
      const current = raw ? JSON.parse(raw) : { state: { bookmarkList: [] }, version: 0 };
      if (!current.state) current.state = { bookmarkList: [] };
      if (!current.state.bookmarkList) current.state.bookmarkList = [];

      current.state.bookmarkList.push(newItem);
      localStorage.setItem('equipBookmarkList', JSON.stringify(current));
      return { success: true, message: `"${newItem.name}" 추가 완료! 현재 북마크: ${current.state.bookmarkList.length}개` };
    } catch (e) {
      return { success: false, message: '오류: ' + e.message };
    }
  }, [item]);
}

async function getBookmarkListFromPage() {
  return execInPage(() => {
    try {
      const raw = localStorage.getItem('equipBookmarkList');
      const current = raw ? JSON.parse(raw) : { state: { bookmarkList: [] }, version: 0 };
      return { success: true, list: current.state?.bookmarkList || [] };
    } catch (e) {
      return { success: false, list: [] };
    }
  });
}

async function loadBookmarkList() {
  const listEl = document.getElementById('bookmarkList');
  const countEl = document.getElementById('bookmarkCount');

  if (!(await checkPageStatus())) {
    listEl.innerHTML = '<div class="empty-state">maplescouter.com에 접속해주세요</div>';
    return;
  }

  try {
    const res = await getBookmarkListFromPage();
    const list = res.list || [];
    countEl.textContent = `총 ${list.length}개`;

    if (list.length === 0) {
      listEl.innerHTML = '<div class="empty-state">북마크된 아이템이 없습니다</div>';
      return;
    }

    listEl.innerHTML = list.map((item) => {
      const grade = item.potential_grade || '';
      const badgeClass = grade ? `grade-${grade}` : '';
      return `
        <div class="bookmark-item">
          <div class="bookmark-item-icon" style="display:flex;align-items:center;justify-content:center;font-size:18px;">🗡️</div>
          <div class="bookmark-item-info">
            <div class="bookmark-item-name">${item.name}</div>
            <div class="bookmark-item-meta">${item.slot} · ★${item.starforce || 0}</div>
          </div>
          ${grade ? `<span class="grade-badge ${badgeClass}">${grade}</span>` : ''}
        </div>
      `;
    }).join('');
  } catch (e) {
    listEl.innerHTML = `<div class="empty-state">오류: ${e.message}</div>`;
  }
}

document.getElementById('btnRefresh')?.addEventListener('click', loadBookmarkList);

let toastTimer;
function showToast(message, type = 'default') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `toast show ${type}`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.classList.remove('show'); }, 3000);
}


// ═══════════════════════════════════════════════════════════
// API 할당량(Quota) 추적 로직 (로컬 카운팅 방식)
// ═══════════════════════════════════════════════════════════
const MAX_QUOTA = {
  'gemini-2.5-flash': 20,
  'gemini-3.1-flash-lite-preview': 500
};

function initAndCheckQuota() {
  const today = new Intl.DateTimeFormat('ko-KR', { timeZone: 'Asia/Seoul' }).format(new Date());
  const storedDate = localStorage.getItem('maple_quota_date');
  
  if (storedDate !== today) {
    localStorage.setItem('maple_quota_date', today);
    localStorage.setItem('maple_quota_25', '0');
    localStorage.setItem('maple_quota_31', '0');
  }
  updateQuotaUI();
}

function updateQuotaUI() {
  const used25 = parseInt(localStorage.getItem('maple_quota_25') || '0');
  const used31 = parseInt(localStorage.getItem('maple_quota_31') || '0');
  
  const remain25 = Math.max(0, MAX_QUOTA['gemini-2.5-flash'] - used25);
  const remain31 = Math.max(0, MAX_QUOTA['gemini-3.1-flash-lite-preview'] - used31);

  const el25 = document.getElementById('quota-25');
  const el31 = document.getElementById('quota-31');

  if (el25) {
    el25.textContent = `오늘 남은 횟수: ${remain25}`;
    el25.className = remain25 <= 5 ? 'quota-badge warning' : 'quota-badge';
  }
  if (el31) {
    el31.textContent = `오늘 남은 횟수: ${remain31}`;
    el31.className = remain31 <= 50 ? 'quota-badge warning' : 'quota-badge';
  }
}

function increaseUsedQuota(modelName) {
  if (modelName === 'gemini-2.5-flash') {
    const current = parseInt(localStorage.getItem('maple_quota_25') || '0');
    localStorage.setItem('maple_quota_25', current + 1);
  } else {
    const current = parseInt(localStorage.getItem('maple_quota_31') || '0');
    localStorage.setItem('maple_quota_31', current + 1);
  }
  updateQuotaUI();
}


// ═══════════════════════════════════════════════════════════
// 설정 및 상태 복구
// ═══════════════════════════════════════════════════════════
function loadSettings() {
  const key = localStorage.getItem('maple_gemini_api_key') || '';
  const input = document.getElementById('visionApiKey');
  if (input && key) {
    input.value = key;
    setApiKeyStatus('✓ 저장된 키 로드됨', 'ok');
  }

  const savedModel = localStorage.getItem('maple_selected_model') || 'gemini-2.5-flash';
  const radio = document.querySelector(`input[name="modelSelection"][value="${savedModel}"]`);
  if (radio) radio.checked = true;

  initAndCheckQuota(); 
  return key;
}

function setApiKeyStatus(msg, type) {
  const el = document.getElementById('apiKeyStatus');
  if (!el) return;
  el.textContent = msg;
  el.className = `api-key-status ${type}`;
}

// 🔥 핵심 변경 부분: 키가 달라지면 할당량을 리셋합니다 🔥
document.getElementById('btnSaveKey')?.addEventListener('click', () => {
  const key = document.getElementById('visionApiKey').value.trim();
  if (!key) { setApiKeyStatus('키를 입력해주세요', 'err'); return; }
  if (!key.startsWith('AIza')) { setApiKeyStatus('⚠ 형식이 올바르지 않습니다 (AIza...)', 'err'); return; }
  
  const oldKey = localStorage.getItem('maple_gemini_api_key');
  
  // 입력한 키가 기존 저장된 키와 다르다면 할당량 사용 기록을 완전히 초기화
  if (oldKey !== key) {
    localStorage.setItem('maple_quota_25', '0');
    localStorage.setItem('maple_quota_31', '0');
  }

  localStorage.setItem('maple_gemini_api_key', key);
  setApiKeyStatus('✓ 저장 완료 (할당량 갱신됨)', 'ok');
  
  // UI 즉시 업데이트
  updateQuotaUI();
});

document.querySelectorAll('input[name="modelSelection"]').forEach(radio => {
  radio.addEventListener('change', (e) => {
    localStorage.setItem('maple_selected_model', e.target.value);
  });
});

let currentImageBase64 = null;
let currentImageMediaType = 'image/png';

function loadSavedOcrState() {
  const saved = localStorage.getItem('maple_ocr_state');
  if (saved) {
    try {
      const state = JSON.parse(saved);
      if (state.image && state.parsed) {
        currentImageBase64 = state.image;
        currentImageMediaType = state.mediaType || 'image/png';

        document.getElementById('ocrPreview').src = `data:${currentImageMediaType};base64,${currentImageBase64}`;
        document.getElementById('ocrPreviewWrap').style.display = 'block';
        document.getElementById('dropZone').style.display = 'none';
        document.getElementById('btnRunOcr').disabled = false;

        renderOcrResult(state.parsed);
        const statusEl = document.getElementById('ocrStatus');
        statusEl.className = 'ocr-status ok';
        statusEl.textContent = `✓ 저장된 작업 내역을 불러왔습니다.`;
        statusEl.style.display = 'block';
      }
    } catch (e) {
      console.error("Saved state parsing error:", e);
    }
  }
}

function clearOcrState() {
  localStorage.removeItem('maple_ocr_state');
  currentImageBase64 = null;
  document.getElementById('ocrPreviewWrap').style.display = 'none';
  document.getElementById('dropZone').style.display = 'block';
  document.getElementById('btnRunOcr').disabled = true;
  document.getElementById('ocrResult').style.display = 'none';
  document.getElementById('ocrStatus').style.display = 'none';
  document.getElementById('fileInput').value = '';
}

function saveCurrentOcrState() {
  if (document.getElementById('ocrResult').style.display === 'none') return;
  const grid = document.getElementById('ocrParsedGrid');
  const data = {};
  grid.querySelectorAll('input[data-key]').forEach(el => { data[el.dataset.key] = el.value.trim(); });
  
  const state = {
    image: currentImageBase64,
    mediaType: currentImageMediaType,
    parsed: {
      name: data['name'], slot: data['slot'], part: data['part'], base_equipment_level: data['base_equipment_level'], scroll_upgrade: data['scroll_upgrade'], soul_option: data['soul_option'] || null,
      totalOption: { str: data['total_str'], dex: data['total_dex'], int: data['total_int'], luk: data['total_luk'], max_hp: data['total_max_hp'], attack_power: data['total_attack_power'], magic_power: data['total_magic_power'], all_stat: data['total_all_stat'], boss_damage: data['total_boss_damage'], damage: data['total_damage'], ignore_monster_armor: data['total_ignore_monster_armor'], armor: data['total_armor'], max_hp_rate: data['total_max_hp_rate'] },
      potential_grade: data['potential_grade'], potential_option_1: [data['pot1'], data['pot2'], data['pot3']],
      additional_potential_grade: data['additional_potential_grade'], additional_potential_option_1: [data['add1'], data['add2'], data['add3']],
      exceptionalOption: { str: data['ex_str'], dex: data['ex_dex'], int: data['ex_int'], luk: data['ex_luk'], max_hp: data['ex_max_hp'], max_mp: data['ex_max_mp'], attack_power: data['ex_attack_power'], magic_power: data['ex_magic_power'], exceptional_upgrade: data['ex_upgrade'] }
    }
  };
  localStorage.setItem('maple_ocr_state', JSON.stringify(state));
}

document.getElementById('btnClearImage')?.addEventListener('click', clearOcrState);
document.getElementById('btnResetState')?.addEventListener('click', () => { clearOcrState(); showToast('상태가 깔끔하게 초기화되었습니다.', 'success'); });
document.getElementById('ocrParsedGrid')?.addEventListener('input', saveCurrentOcrState);

function setImage(file) {
  currentImageMediaType = file.type || 'image/png';
  const reader = new FileReader();
  reader.onload = (e) => {
    const dataUrl = e.target.result;
    currentImageBase64 = dataUrl.split(',')[1];
    document.getElementById('ocrPreview').src = dataUrl;
    document.getElementById('ocrPreviewWrap').style.display = 'block';
    document.getElementById('dropZone').style.display = 'none';
    document.getElementById('btnRunOcr').disabled = false;
    document.getElementById('ocrResult').style.display = 'none';
    document.getElementById('ocrStatus').style.display = 'none';
  };
  reader.readAsDataURL(file);
}

const dropZone = document.getElementById('dropZone');
dropZone?.addEventListener('click', () => document.getElementById('fileInput').click());
dropZone?.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.classList.add('drag-over'); });
dropZone?.addEventListener('dragleave', () => dropZone.classList.remove('drag-over'));
dropZone?.addEventListener('drop', (e) => { e.preventDefault(); dropZone.classList.remove('drag-over'); const file = e.dataTransfer.files[0]; if (file?.type.startsWith('image/')) setImage(file); });
document.getElementById('fileInput')?.addEventListener('change', (e) => { if (e.target.files[0]) setImage(e.target.files[0]); });
document.addEventListener('paste', (e) => { if (document.querySelector('.tab.active')?.dataset?.tab !== 'ocr') return; for (const item of (e.clipboardData?.items || [])) { if (item.type.startsWith('image/')) { setImage(item.getAsFile()); break; } } });

// ─── Gemini 통신 ───────────────────────────────────────────
const GEMINI_PROMPT = `
메이플스토리 아이템 툴팁 이미지를 분석하여 스탯을 추출하세요.

[핵심 규칙]
1. 값이 0이거나 없는 옵션은 JSON 키를 아예 생략하세요. (빈 문자열이나 "0" 출력 절대 금지) — 단, 규칙 1-1, 1-2 예외 적용.
1-1. [잠재능력 필수 출력] potential_grade가 존재하면 potential_option_1은 반드시 정확히 배열로 출력하세요. 이미지에서 텍스트를 읽기 어렵더라도 절대 키를 생략하거나 빈 배열로 두지 마세요. 읽기 어려운 항목은 최대한 추측해서라도 채우세요.
1-2. [에디셔널 필수 출력] additional_potential_grade가 존재하면 additional_potential_option_1도 반드시 정확히 출력하세요. 이미지에서 텍스트를 읽기 어렵더라도 절대 키를 생략하거나 빈 배열로 두지 마세요. 읽기 어려운 항목은 최대한 추측해서라도 채우세요.
2. totalOption은 각 스탯 줄의 맨 앞 큰 숫자(총합)만 추출합니다. 괄호 안 숫자는 무시하세요.
3. 잠재능력과 에디셔널 등급은 반드시 "레어", "에픽", "유니크", "레전드리" 중 하나만 적으세요.
4. 익셉셔널 옵션이 없으면 exceptionalOption 키 전체를 생략하세요.
5. starforce는 사용자가 수기로 입력하므로 아예 키를 생략하세요. (이미지 상단의 별이나 '가위 사용 가능 횟수'의 숫자와 절대 혼동하지 말 것)
6. 아이템 이름(name)을 추출할 때, 이름 바로 위에 작게 적힌 제작자/유저 닉네임(예: '~~의')은 절대 포함하지 마세요. 오직 가장 크고 굵은 글씨로 적힌 실제 장비 본명만 추출하세요. (예: "데티의 불멸의 유산" -> "불멸의 유산")
7. 아이템의 slot이 '보조무기' 인 경우 part 에도 보조무기라고 적지 말고 보조무기 옆의 브레이슬릿, 로자리오, 무게추, 메달 등 세부 명칭을 part에 적으세요.
8. 아이템의 slot이 '무기'인 경우 part에는 3번째 항목인 스태프, 두손검, 아대, 튜너 등 세뷰 명칭을 part에 적으세요. 두번째 항목인 한손, 두손은 무시하면 됩니다.
8-1. 아이템이 slot이 '무기' 이고 최하단에 소울이 존재한다면 soul_option에 해당 내용을 작성하세요. soul_name은 무시하셔도 됩니다.
8-2. soul_option은 아래 목록 중 이미지에서 읽은 내용과 가장 일치하는 것을 정확히 그대로 출력하세요. 목록에 없는 표현은 절대 사용하지 마세요.
    유효한 soul_option 목록:
    "공격력 +3%"
    "마력 +3%"
    "올스탯 +5%"
    "최대 +HP 2000"
    "크리티컬 확률 +12%"
    "몬스터 방어율 무시 +7%"
    "보스 몬스터 공격 시 데미지 +7%"
    "무공 소울(STR +7)"
    "무공 소울(DEX +7)"
    "무공 소울(INT +7)"
    "무공 소울(LUK +7)"
    "무공 소울(ALL +5)"
    "무공 소울(최대 HP +300)"
    "무공 소울(최대 MP +300)"
    "에피네아 소울(STR +4)"
    "에피네아 소울(DEX +4)"
    "에피네아 소울(INT +4)"
    "에피네아 소울(LUK +4)"
    "에피네아 소울(ALL +2)"
    "에피네아 소울(최대 HP +180)"
    "에피네아 소울(최대 MP +180)"

[★ 익셉셔널 옵션 추출 규칙]
- 툴팁 하단 빨간색 "EX 익셉셔널" 섹션을 분석하세요.
- "올스탯 +N": str, dex, int, luk 키에 각각 동일하게 "N"을 입력하세요. (예: 올스탯 +15 -> str: "15", dex: "15", int: "15", luk: "15")
- "최대 HP / 최대 MP +N": max_hp에 "N", max_mp에 "N"을 입력하세요.
- "공격력 / 마력 +N": attack_power에 "N", magic_power에 "N"을 입력하세요.
- "익셉셔널 : N회": exceptional_upgrade 키에 숫자 N을 입력하세요. (예: "익셉셔널 : 1회" -> exceptional_upgrade: 1)

[★ 스탯-JSON 키 매핑 규칙 (매우 중요)]
- STR -> str
- DEX -> dex
- INT -> int
- LUK -> luk
- 공격력 -> attack_power
- 마력 -> magic_power
- 방어력 -> armor
- 최대 HP (+숫자) -> max_hp
- 최대 MP (+숫자) -> max_mp
- 올스탯 (+N%) -> all_stat (※ % 기호를 떼고 숫자만 추출. 예: "올스탯 +5%" -> "5")
- 최대 HP (+N%) -> max_hp_rate (※ % 기호를 떼고 숫자만 추출. 예: "최대 HP +5%" -> "5")
- 데미지 -> damage
- 보스 몬스터 공격 시 데미지 -> boss_damage
- 몬스터 방어율 무시 -> ignore_monster_armor

[출력 데이터 구조 예시 (고통의 근원 기준)]
{
  "name": "고통의 근원",
  "slot": "펜던트",
  "base_equipment_level": 160,
  "scroll_upgrade": "0",
  "totalOption": {
    "str": "227",
    "dex": "141",
    "int": "161",
    "luk": "171",
    "all_stat": "5",
    "max_hp": "255",
    "max_hp_rate": "5",
    "attack_power": "95",
    "magic_power": "95",
    "armor": "606"
  },
  "potential_grade": "레전드리",
  "potential_option_1": ["STR +12%", "STR +9%", "STR +12%"],
  "additional_potential_grade": "레전드리",
  "additional_potential_option_1": ["올스탯 +6%", "올스탯 +5%", "올스탯 +5%"]
}
`.trim();

async function runGeminiVision(base64Image, mediaType, apiKey) {
  const selectedModel = document.querySelector('input[name="modelSelection"]:checked').value;
  
  if (selectedModel === 'gemini-2.5-flash' && parseInt(localStorage.getItem('maple_quota_25') || '0') >= MAX_QUOTA['gemini-2.5-flash']) {
    throw new Error('오늘 Gemini 2.5 Flash 무료 사용량(20회)을 모두 소진했습니다. 내일 다시 시도하거나 3.1 모델을 선택하세요.');
  }
  if (selectedModel === 'gemini-3.1-flash-lite-preview' && parseInt(localStorage.getItem('maple_quota_31') || '0') >= MAX_QUOTA['gemini-3.1-flash-lite-preview']) {
    throw new Error('오늘 Gemini 3.1 Flash-Lite 무료 사용량(500회)을 모두 소진했습니다. 내일 다시 시도하세요.');
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${selectedModel}:generateContent?key=${apiKey}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{
        parts: [{ text: GEMINI_PROMPT }, { inline_data: { mime_type: mediaType, data: base64Image } }]
      }],
      generationConfig: { response_mime_type: "application/json" }
    })
  });

  if (!response.ok) {
    const err = await response.json();
    let msg = err.error?.message || `HTTP ${response.status}`;
    if (msg.includes("experiencing high demand")) {
      msg = "현재 서버가 너무 혼잡합니다. 잠시 후 다시 시도하거나 2.5 Flash 모델을 사용해 보세요.";
    }
    throw new Error(msg);
  }

  increaseUsedQuota(selectedModel);

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '{}';
  console.log('[Gemini Raw Response]', text);
  const parsed = JSON.parse(text);

  if (parsed.exceptionalOption) { parsed.exceptionalOption.exceptional_upgrade = parseInt(parsed.exceptionalOption.exceptional_upgrade) || 0; }
  const VALID_GRADES = ['레어', '에픽', '유니크', '레전드리'];
  if (!VALID_GRADES.includes(parsed.potential_grade)) parsed.potential_grade = '';
  if (!VALID_GRADES.includes(parsed.additional_potential_grade)) parsed.additional_potential_grade = '';

  return parsed;
}

// ─── 분석 결과 렌더링 ──────────────────────────────────────
function renderOcrResult(parsed) {
  const grid = document.getElementById('ocrParsedGrid');
  if (!grid) return;

  const field = (label, value, key) => `<div class="ocr-field"><span class="ocr-field-label">${label}</span><input class="ocr-field-value" data-key="${key}" value="${String(value ?? '')}" /></div>`;
  const sectionHead = (title) => `<div class="ocr-section-head">${title}</div>`;
  const t = parsed.totalOption || {};
  const statField = (label, statKey) => field(label, t[statKey] ?? '0', `total_${statKey}`);

  const hasPotential = !!parsed.potential_grade;
  const hasAdditional = !!parsed.additional_potential_grade;
  const ex = parsed.exceptionalOption || {};
  const hasExceptional = ['str','dex','int','luk','max_hp','max_mp','attack_power','magic_power'].some(k => parseInt(ex[k]) > 0);

  const sections = [
    sectionHead('기본 정보'), field('아이템명', parsed.name, 'name'), field('부위', parsed.slot, 'slot'), field('세부 명칭', parsed.part ?? '', 'part'), field('요구 레벨', parsed.base_equipment_level ?? '0', 'base_equipment_level'), field('주문서', parsed.scroll_upgrade ?? '0', 'scroll_upgrade'), field('소울 옵션', parsed.soul_option ?? '', 'soul_option'),
    sectionHead('총합 스탯 (확인 후 수정 가능)'), statField('STR', 'str'), statField('DEX', 'dex'), statField('INT', 'int'), statField('LUK', 'luk'), statField('최대HP', 'max_hp'), statField('공격력', 'attack_power'), statField('마력', 'magic_power'), statField('올스탯', 'all_stat'), statField('보공%', 'boss_damage'), statField('데미지%', 'damage'), statField('방무%', 'ignore_monster_armor'), statField('방어력', 'armor'), statField('HP%', 'max_hp_rate'),
    ...(hasPotential ? [sectionHead('잠재능력'), field('잠재 등급', parsed.potential_grade, 'potential_grade'), field('잠재 1', parsed.potential_option_1?.[0], 'pot1'), field('잠재 2', parsed.potential_option_1?.[1], 'pot2'), field('잠재 3', parsed.potential_option_1?.[2], 'pot3')] : []),
    ...(hasAdditional ? [sectionHead('에디셔널 잠재능력'), field('에디 등급', parsed.additional_potential_grade, 'additional_potential_grade'), field('에디 1', parsed.additional_potential_option_1?.[0], 'add1'), field('에디 2', parsed.additional_potential_option_1?.[1], 'add2'), field('에디 3', parsed.additional_potential_option_1?.[2], 'add3')] : []),
    ...(hasExceptional ? [sectionHead('익셉셔널 옵션'), field('STR', ex.str ?? '0', 'ex_str'), field('DEX', ex.dex ?? '0', 'ex_dex'), field('INT', ex.int ?? '0', 'ex_int'), field('LUK', ex.luk ?? '0', 'ex_luk'), field('최대HP', ex.max_hp ?? '0', 'ex_max_hp'), field('최대MP', ex.max_mp ?? '0', 'ex_max_mp'), field('공격력', ex.attack_power ?? '0', 'ex_attack_power'), field('마력', ex.magic_power ?? '0', 'ex_magic_power'), field('강화횟수', ex.exceptional_upgrade ?? 0, 'ex_upgrade')] : []),
  ];

  grid.innerHTML = sections.join('');
  document.getElementById('ocrResult').style.display = 'block';
}

function buildItemFromOcrResult() {
  const grid = document.getElementById('ocrParsedGrid');
  const data = {}; grid.querySelectorAll('input[data-key]').forEach(el => { data[el.dataset.key] = el.value.trim(); });
  const getN = (k) => String(parseInt(data[k]) || 0);

  const baseEqLevel = parseInt(data['base_equipment_level']) || 0;
  const zeroStats = () => ({ str:'0', dex:'0', int:'0', luk:'0', max_hp:'0', max_mp:'0', attack_power:'0', magic_power:'0', armor:'0', speed:'0', jump:'0', damage:'0', boss_damage:'0', ignore_monster_armor:'0', all_stat:'0', max_hp_rate:'0', max_mp_rate:'0', base_equipment_level: 0, equipment_level_decrease: 0 });
  const combinedBossDamage = String((parseInt(data['total_boss_damage']) || 0) + (parseInt(data['total_damage']) || 0));
  const totalOption = { ...zeroStats(), str: getN('total_str'), dex: getN('total_dex'), int: getN('total_int'), luk: getN('total_luk'), max_hp: getN('total_max_hp'), attack_power: getN('total_attack_power'), magic_power: getN('total_magic_power'), all_stat: getN('total_all_stat'), boss_damage: combinedBossDamage, ignore_monster_armor: getN('total_ignore_monster_armor'), armor: getN('total_armor'), max_hp_rate: getN('total_max_hp_rate'), base_equipment_level: baseEqLevel };

  const slot = data['name'] ? (data['slot'] || '') : '';
  const part = data['part'] || slot;
  const soulOption = data['soul_option'] || null;
  return {
    slot, part, name: data['name'] || '', iconUrl: '', starforce: '0', starforce_scroll_flag: '미사용', scroll_upgrade: data['scroll_upgrade'] || '0', totalOption, baseOption: { ...zeroStats(), base_equipment_level: baseEqLevel }, addOption: zeroStats(), etcOption: zeroStats(), starforceOption: zeroStats(),
    potential_grade: data['potential_grade'] || '', potential_option_1: [data['pot1']||'', data['pot2']||'', data['pot3']||''], additional_potential_grade: data['additional_potential_grade'] || '', additional_potential_option_1: [data['add1']||'', data['add2']||'', data['add3']||''],
    exceptionalOption: { str: getN('ex_str'), dex: getN('ex_dex'), int: getN('ex_int'), luk: getN('ex_luk'), max_hp: getN('ex_max_hp'), max_mp: getN('ex_max_mp'), attack_power: getN('ex_attack_power'), magic_power: getN('ex_magic_power'), exceptional_upgrade: parseInt(data['ex_upgrade'] || '0') || 0 },
    hasExceptional: (parseInt(data['ex_str']) > 0 || parseInt(data['ex_dex']) > 0 || parseInt(data['ex_int']) > 0 || parseInt(data['ex_luk']) > 0 || parseInt(data['ex_max_hp']) > 0 || parseInt(data['ex_attack_power']) > 0 || parseInt(data['ex_magic_power']) > 0),
    soul_name: soulOption ? '소울 장착' : null, soul_option: soulOption, ring_level: 0, itemScore: '0', character_name: 'Unknown', class_group: '전사', cuttable_count: '255', title: '', bookMark: true, base_equipment_level: baseEqLevel,
  };
}

// ─── 버튼 리스너 ───────────────────────────────────────────
document.getElementById('btnRunOcr')?.addEventListener('click', async () => {
  const apiKey = localStorage.getItem('maple_gemini_api_key') || document.getElementById('visionApiKey').value.trim();
  if (!apiKey) { showToast('Gemini API 키를 먼저 저장해주세요', 'error'); return; }
  if (!currentImageBase64) { showToast('이미지를 먼저 업로드해주세요', 'error'); return; }

  const statusEl = document.getElementById('ocrStatus');
  const btn = document.getElementById('btnRunOcr');
  statusEl.style.display = 'block';
  statusEl.className = 'ocr-status loading';
  statusEl.textContent = '🤖 AI 분석 중...';
  btn.disabled = true;
  document.getElementById('ocrResult').style.display = 'none';

  try {
    const parsed = await runGeminiVision(currentImageBase64, currentImageMediaType, apiKey);
    statusEl.className = 'ocr-status ok';
    statusEl.textContent = `✓ 분석 완료! "${parsed.name || '이름 미인식'}" — 수치를 확인 후 추가하세요.`;
    
    renderOcrResult(parsed);
    saveCurrentOcrState();
    trackApiCall();
    
  } catch (e) {
    statusEl.className = 'ocr-status err';
    statusEl.textContent = '✗ 오류: ' + e.message;
    console.error('[Gemini OCR]', e);
  } finally {
    btn.disabled = false;
  }
});

document.getElementById('btnOcrSubmit')?.addEventListener('click', async () => {
  if (!(await checkPageStatus())) return;
  try {
    const item = buildItemFromOcrResult();
    if (!item.name) throw new Error('아이템 이름이 없습니다.');
    if (!item.slot) throw new Error('부위가 없습니다.');
    const res = await addBookmarkToPage(item);
    
    if (res.success) { showToast(res.message, 'success'); } 
    else { showToast(res.message, 'error'); }
  } catch (e) {
    showToast(e.message, 'error');
  }
});

// ─── 초기 구동 ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  checkPageStatus();
  loadSettings();
  loadSavedOcrState();
});