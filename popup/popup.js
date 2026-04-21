// ─── 아이콘 URL 맵 ────────────────────────────────────────
const BASE = 'https://open.api.nexon.com/static/maplestory/item/icon/';
const BASESEA = 'https://open.api.nexon.com/static/maplestorysea/item/icon/';
const ICON_MAP = {
  // 모자
  '하이네스 워리어헬름': BASE+'KEPCIAHG', '카오스 벨룸의 헬름': BASE+'KEPCIAMD', '도전자의 모자': BASE+'KEPCNCNF',
  '앱솔랩스 나이트헬름': BASE+'KEPCPDMD', '아케인셰이드 나이트햇': BASE+'KEPCPPOJ', '에테르넬 나이트헬름': BASE+'KEPCOOGB',
  '하이네스 레인져베레': BASE+'KEPCIAHI', '앱솔랩스 아처후드': BASE+'KEPCPDMF', '아케인셰이드 아처햇': BASE+'KEPCPPPB', '에테르넬 아처햇': BASE+'KEPCOOGD',
  '하이네스 어새신보닛': BASE+'KEPCIPOB', '앱솔랩스 시프캡': BASE+'KEPCPDME', '아케인셰이드 시프햇': BASE+'KEPCPPPA', '에테르넬 시프반다나': BASE+'KEPCOOGC',
  '하이네스 던위치햇': BASE+'KEPCIAHJ', '앱솔랩스 메이지크라운': BASE+'KEPCPDMC', '아케인셰이드 메이지햇': BASE+'KEPCPPOI', '에테르넬 메이지햇': BASE+'KEPCOOGA',
  '하이네스 원더러햇': BASE+'KEPCIPOA', '앱솔랩스 파이렛페도라': BASE+'KEPCPDMH', '아케인셰이드 파이렛햇': BASE+'KEPCPPPD', '에테르넬 파이렛햇': BASE+'KEPCOOGF',
  // 상의
  '이글아이 워리어아머': BASE+'KEPGJFLF', '도전자의 상의': BASE+'KEPGJDIH',
  '에테르넬 나이트아머': BASE+'KEPGJDNC', '이글아이 레인져후드': BASE+'KEPGJFLH', '에테르넬 아처후드': BASE+'KEPGJDNE',
  '이글아이 어새신셔츠': BASE+'KEPGJFLG', '에테르넬 시프셔츠': BASE+'KEPGJDNH',
  '이글아이 던위치로브': BASE+'KEPGJFLE', '에테르넬 메이지로브': BASE+'KEPGJDNF',
  '이글아이 원더러코트': BASE+'KEPGJFLJ', '에테르넬 파이렛코트': BASE+'KEPGJDNG',
  // 하의
  '트릭스터 워리어팬츠': BASE+'KEPEJGIE', '도전자의 하의': BASE+'KEPEJEOA',
  '에테르넬 나이트팬츠': BASE+'KEPEJFGE', '트릭스터 레인져팬츠': BASE+'KEPEJGIG', '에테르넬 아처팬츠': BASE+'KEPEJFGG',
  '트릭스터 어새신팬츠': BASE+'KEPEJGIJ', '에테르넬 시프팬츠': BASE+'KEPEJFGJ',
  '트릭스터 던위치팬츠': BASE+'KEPEJGIH', '에테르넬 메이지팬츠': BASE+'KEPEJFGH',
  '트릭스터 원더러팬츠': BASE+'KEPEJGII', '에테르넬 파이렛팬츠': BASE+'KEPEJFGI',
  // 장갑
  '앱솔랩스 나이트글러브': BASE+'KEPKJBNH', '도전자의 장갑': BASE+'KEPKJPPG',
  '아케인셰이드 나이트글러브': BASE+'KEPKJBHE', '에테르넬 나이트글러브': BASE+'KEPKJAIB',
  // 신발
  '앱솔랩스 나이트슈즈': BASE+'KEPFIHNB', '도전자의 신발': BASE+'KEPFIONH',
  '아케인셰이드 나이트슈즈': BASE+'KEPFIGLJ', '에테르넬 나이트슈즈': BASE+'KEPFIBMI',
  // 망토
  '앱솔랩스 나이트케이프': BASE+'KEOCJAJE', '도전자의 망토': BASE+'KEOCIAMJ',
  '아케인셰이드 나이트케이프': BASE+'KEOCJOKB', '에테르넬 나이트케이프': BASE+'KEOCIDNC',
  // 어깨장식
  '마이스터 숄더': BASE+'KEOHJGLF', '도전자의 어깨장식': BASE+'KEOHJFMJ',
  '앱솔랩스 나이트숄더': BASE+'KEOHJGJJ', '아케인셰이드 나이트숄더': BASE+'KEOHJGHH', '에테르넬 나이트숄더': BASE+'KEOHJFPD',
  // 벨트
  '타일런트 히아데스 벨트': BASE+'KEOBJGJE', '골든 클로버 벨트': BASE+'KEOBJFJD',
  '분노한 자쿰의 벨트': BASE+'KEOBJFHH', '몽환의 벨트': BASE+'KEOBJEOJ',
  // 귀고리
  '데아 시두스 이어링': BASE+'KEPBJFKA', '마이스터 이어링': BASE+'KEPBJFOB',
  '오션 글로우 이어링': BASE+'KEPBJFND', '에스텔라 이어링': BASE+'KEPBJENB', '커맨더 포스 이어링': BASE+'KEPBJEPH',
  // 얼굴장식
  '트와일라이트 마크': BASE+'KEPDJALG', '루즈 컨트롤 머신 마크': BASE+'KEPDJBND', '오만의 원죄': '/reward/bright_boss_face_acc.png',
  // 눈장식
  '블랙빈 마크': BASE+'KEPAJFND', '파풀라투스 마크': BASE+'KEPAJFJG', '마력이 깃든 안대': BASE+'KEPAJFJJ',
  // 펜던트
  '핑크 펜던트(직업)': BASE+'KEOAJHHJ', '퍼플 펜던트(직업)': BASE+'KEOAJHHJ',
  '매커네이터 펜던트': BASE+'KEOAJFLF', '리퍼펜던트': BASESEA+'KEOAJFHH',
  '프론티어C': BASESEA+'KEOAJFLJ', '프론티어B': BASESEA+'KEOAJFLG',
  '도미네이터 펜던트': BASE+'KEOAJGLB', '데이브레이크 펜던트': BASE+'KEOAJDKC',
  '고통의 근원': BASE+'KEOAJDNB', '죽음의 맹세': '/item/deathOath.png',
  // 반지
  '이터널 플레임 링': BASE+'KEODPEMF', '어웨이크 링': BASE+'KEODPEPJ',
  '테네브리스 원정대 반지': BASE+'KEODPEOG', '글로리온 링 : 슈프림': BASE+'KEODPEPH',
  '헤카톤반지': BASESEA+'KEODIGKH', '마이스터링': BASE+'KEODIHLE',
  '무적반지': BASESEA+'KEODIFII', '칸나반지': BASESEA+'KEODIGLE', '듄켈반지': BASESEA+'KEODIEOD',
  '가디언 엔젤 링': BASE+'KEODIEPH', '여명의 가디언 엔젤 링': BASE+'KEODIEPH',
  '거대한 공포': BASE+'KEODIEOH', '근원의 속삭임': BASE+'KEODIEKA', '황홀한 악몽': '/reward/bright_boss_ring2.png',
  // 기계 심장
  '티타늄 하트': BASE+'KEJFJHKB', '페어리 하트': BASE+'KEJFJHJI', '150제 하트': BASESEA+'KEJFJHII',
  '블랙 하트': BASE+'KEJFJHJH', '플라즈마 하트': BASE+'KEJFJHHI', '컴플리트 언더컨트롤': BASE+'KEJFJHHE',
  // 포켓 아이템
  '핑크빛 성배': BASE+'KEOEJHME', '저주받은 적의 마도서': BASE+'KEOEJHGB',
  // 뱃지
  '창세의 뱃지': BASE+'KEOKJFGE', '칠요의 뱃지': BASE+'KEOKJFOB',
  // 훈장
  '본 투 비 레드': BASE+'KEOGIFOC', '칠요의 몬스터파커': BASE+'KEOGJOMD', '불멸의 유산': '/reward/bright_boss_merit.png',
  // 무기
  '도전자의 리벤지가즈': BASE+'KELFJFGG', '아케인셰이드 가즈': BASE+'KELFJFIE', '제네시스 가즈': BASE+'KELFJFJE',
  '도전자의 피어싱스피어': BASE+'KELBJFNI', '도전자의 핼버드': BASE+'KELGJFHH',
  '아케인셰이드 스피어': BASE+'KELBJFPJ', '아케인셰이드 폴암': BASE+'KELGJFJF',
  '제네시스 스피어': BASE+'KELBJFMG', '제네시스 폴암': BASE+'KELGJFGE',
  '데스티니 스피어': './destiny/destiny21.png', '데스티니 폴암': './destiny/destiny22.png',
  '도전자의 비트해머': BASE+'KEMAJFJJ', '도전자의 엑스': BASE+'KEMDJFME',
  '아케인셰이드 해머': BASE+'KEMAJFLE', '아케인셰이드 엑스': BASE+'KEMDJFOC',
  '제네시스 해머': BASE+'KEMAJFIF', '제네시스 엑스': BASE+'KEMDJFPC',
  '데스티니 해머': './destiny/destiny12.png', '데스티니 엑스': './destiny/destiny11.png',
  '도전자의 데스페라도': BASE+'KENBJGNF', '아케인셰이드 데스페라도': BASE+'KENBJGPC', '제네시스 데스페라도': BASE+'KENBJGMD', '데스티니 데스페라도': './destiny/destiny04.png',
  '도전자의 슬래셔': BASE+'KEMBJEOD', '아케인셰이드 대거': BASE+'KEMBJFJI', '제네시스 대거': BASE+'KEMBJFGI', '데스티니 대거': './destiny/destiny13.png',
  '도전자의 스펠링완드': BASE+'KEMFJFLB', '아케인셰이드 완드': BASE+'KEMFJFMJ', '제네시스 완드': BASE+'KEMFJFNG', '데스티니 완드': './destiny/destiny15.png',
  '도전자의 폭검': BASE+'KENDOHMB', '아케인셰이드 환검': BASE+'KENDOHMD', '제네시스 창세검': BASE+'KENDOHMF', '데스티니 초극검': './destiny/destiny47.png',
  '도전자의 샤이닝로드': BASE+'KENDJGKA', '아케인셰이드 샤이닝로드': BASE+'KENDJGMB', '제네시스 샤이닝로드': BASE+'KENDJGMI', '데스티니 샤이닝로드': './destiny/destiny00.png',
  '도전자의 듀얼보우건': BASE+'KEKAJGIC', '아케인셰이드 듀얼보우건': BASE+'KEKAJGKC', '제네시스 듀얼보우건': BASE+'KEKAJGLD', '데스티니 듀얼보우건': './destiny/destiny28.png',
  '도전자의 포인팅건': BASE+'KELLJFLJ', '아케인셰이드 피스톨': BASE+'KELLJFNE', '제네시스 피스톨': BASE+'KELLJFKE', '데스티니 피스톨': './destiny/destiny27.png',
  '도전자의 세이버': BASE+'KEMCJEJD', '아케인셰이드 세이버': BASE+'KEMCJEKC', '제네시스 세이버': BASE+'KEMCJELE', '데스티니 세이버': './destiny/destiny10.png',
  '도전자의 블로우너클': BASE+'KELKJFKF', '아케인셰이드 클로': BASE+'KELKJFMA', '제네시스 클로': BASE+'KELKJFND', '데스티니 클로': './destiny/destiny26.png',
  '도전자의 스펠링스태프': BASE+'KEMKJFGH', '아케인셰이드 스태프': BASE+'KEMKJFIE', '제네시스 스태프': BASE+'KEMKJFJF', '데스티니 스태프': './destiny/destiny16.png',
  '도전자의 슈팅보우': BASE+'KELHJFGF', '아케인셰이드 보우': BASE+'KELHJFLG', '제네시스 보우': BASE+'KELHJFIH', '데스티니 보우': './destiny/destiny23.png',
  '도전자의 파일 갓': BASE+'KEKKJHLG', '아케인셰이드 엘라하': BASE+'KEKKJHMC', '제네시스 엘라하': BASE+'KEKKJHKF', '데스티니 엘라하': './destiny/destiny32.png',
  '도전자의 브로드세이버': BASE+'KELCJFGI', '아케인셰이드 투핸드소드': BASE+'KELCJFLI', '제네시스 투핸드소드': BASE+'KELCJFIJ', '데스티니 투핸드소드': './destiny/destiny17.png',
  '도전자의 크로스보우': BASE+'KELEJFIG', '아케인셰이드 크로스보우': BASE+'KELEJFKC', '제네시스 크로스보우': BASE+'KELEJFLD', '데스티니 크로스보우': './destiny/destiny24.png',
  '도전자의 튜너': BASE+'KENDIHLD', '아케인셰이드 튜너': BASE+'KENDIHPJ', '제네시스 튜너': BASE+'KENDIHMD', '데스티니 튜너': './destiny/destiny01.png',
  '도전자의 소울슈터': BASE+'KENAJGNF', '아케인셰이드 소울슈터': BASE+'KENAJGPC', '제네시스 소울슈터': BASE+'KENAJGMD', '데스티니 소울슈터': './destiny/destiny03.png',
  '도전자의 매직 건틀렛': BASE+'KENKJHLC', '아케인셰이드 매직 건틀렛': BASE+'KENKJHPG', '제네시스 매직 건틀렛': BASE+'KENKJHKB', '데스티니 매직건틀릿': './destiny/destiny08.png',
  '도전자의 에너지소드': BASE+'KENGJGLI', '아케인셰이드 에너지체인': BASE+'KENGJGMD', '제네시스 에너지체인': BASE+'KENGJGKA', '데스티니 에너지체인': './destiny/destiny05.png',
  '라즐리 9형': BASE+'KEKFJHOI', '라피스 9형': BASE+'KEKEJHOI', '제네시스 라즐리': BASE+'KEKFJHPB', '제네시스 라피스': BASE+'KEKEJHPB', '데스티니 라즐리': './destiny/destiny31.png', '데스티니 라피스': './destiny/destiny30.png',
  '도전자의 체인': BASE+'KENFJHLC', '아케인셰이드 체인': BASE+'KENFJHPG', '제네시스 체인': BASE+'KENFJHKB', '데스티니 체인': './destiny/destiny07.png',
  '도전자의 브레스 슈터': BASE+'KENDPHKJ', '아케인셰이드 브레스 슈터': BASE+'KENDPHPJ', '제네시스 브레스 슈터': BASE+'KENDPHMD', '데스티니 브레스 슈터': './destiny/destiny02.png',
  '도전자의 차크람': BASE+'KELCPHKE', '아케인셰이드 차크람': BASE+'KELCPHPJ', '제네시스 이클립스': BASE+'KELCPHMD', '데스티니 차크람': './destiny/destiny18.png',
  '도전자의 블래스트캐논': BASE+'KEKBJGII', '아케인셰이드 시즈건': BASE+'KEKBJGLB', '제네시스 시즈건': BASE+'KEKBJGLG', '데스티니 블래스트캐논': './destiny/destiny29.png',
  '도전자의 ESP리미터': BASE+'KENEJHIF', '아케인셰이드 ESP리미터': BASE+'KENEJHNI', '제네시스 ESP리미터': BASE+'KENEJHLA', '데스티니 ESP리미터': './destiny/destiny06.png',
  '도전자의 브로드해머': BASE+'KELAJFOG', '아케인셰이드 투핸드해머': BASE+'KELAJGGI', '제네시스 투핸드해머': BASE+'KELAJGHG', '데스티니 투핸드해머': './destiny/destiny20.png',
  '도전자의 에인션트 보우': BASE+'KEKLJHKJ', '아케인셰이드 에인션트 보우': BASE+'KEKLJHMB', '제네시스 에인션트 보우': BASE+'KEKLJHMD', '데스티니 에인션트 보우': './destiny/destiny33.png',
  '도전자의 핀쳐케인': BASE+'KEMEJGIB', '아케인셰이드 케인': BASE+'KEMEJGKB', '제네시스 케인': BASE+'KEMEJGKI', '데스티니 케인': './destiny/destiny14.png',
  '도전자의 괴선': BASE+'KENLJHKI', '아케인셰이드 초선': BASE+'KENLJHPJ', '제네시스 창세선': BASE+'KENLJHMD', '데스티니 초월선': './destiny/destiny09.png',
  // 보조무기
  '파사부': BASE+'KEMHJFHD', '아스트라 탈리스만': '/astra/astra_01.png', '에레브의 광휘': BASE+'KEMHJOJD', '아스트라 옵시디언': '/astra/astra_02.png',
  '버서크 체인': BASE+'KEMHJFMD', '아스트라 체인': '/astra/astra_03.png',
  '극한의 포스실드': BASE+'KEPLCHOF', '루인 포스실드': BASE+'KEPLCHPE', '아스트라 포스실드': '/astra/astra_04.png',
  '아케인셰이드 블레이드': BASE+'KEMGJGOF', '아스트라 블레이드': '/astra/astra_05.png',
  '빛나는 사옥 노리개': BASE+'KEMHPHMC', '아스트라 사옥 노리개': '/astra/astra_06.png',
  '자색 여의보주': '/item/lenSW.png', '아스트라 여의보주': '/astra/astra_07.png',
  '카르마 오브': BASE+'KEMHJDOC', '아스트라 오브': '/astra/astra_08.png',
  '무한의 마법 화살': BASE+'KEMHJHOC', '아스트라 마법 화살': '/astra/astra_09.png',
  '이터널 매그넘': BASE+'KEMHJAOC', '아스트라 매그넘': '/astra/astra_10.png',
  '정의의 소울실드': BASE+'KEPLDHOC', '아스트라 소울실드': '/astra/astra_11.png',
  '리스트 아머': BASE+'KEMHJOOD', '아스트라 리스트 밴드': '/astra/astra_12.png',
  '맥시마이즈 볼': BASE+'KEMHJOLD', '아스트라 엄브럴 실드': '/astra/astra_13.png',
  '블라스트 페더': BASE+'KEMHJFID', '아스트라 페더': '/astra/astra_14.png',
  '익스플로시브 필<3호>': BASE+'KEMHIDOC', '아스트라 익스플로시브 필': '/astra/astra_15.png',
  '백금의 서 <종장>': BASE+'KEMHJFLD', '아스트라 아케인 실드': '/astra/astra_16.png',
  '슬래싱 섀도우': BASE+'KEMHJFGD', '아스트라 베인 실드': '/astra/astra_17.png',
  '전발적중': BASE+'KEMHJFJD', '아스트라 불스아이': '/astra/astra_20.png',
  '노블 브레이슬릿': BASE+'KEMHPHOC', '아스트라 브레이슬릿': '/astra/astra_21.png',
  '천룡추': BASE+'KEMHJOND', '아스트라 백호추': '/astra/astra_22.png',
  '얼티밋 패스': BASE+'KEMHIBOC', '아스트라 패스': '/astra/astra_23.png',
  '적녹의 서 <종장>': BASE+'KEMHJFND', '청은의 서 <종장>': BASE+'KEMHJFKD', '드래곤마스터의 유산': BASE+'KEMHJOKD',
  '아스트라 프로미넌트 실드': '/astra/astra_24.png',
  '그린 소울링': BASE+'KEMHJBOF', '아스트라 소울링': '/astra/astra_25.png',
  '와일드 팡': BASE+'KEMHJOIC', '아스트라 와일드 터스크': '/astra/astra_26.png',
  '황금빛 여우구슬': BASE+'KEMHIGOC', '아스트라 여우구슬': '/astra/astra_28.png',
  '글로리 매직윙': BASE+'KEMHICOC', '아스트라 매직윙': '/astra/astra_29.png',
  '옥타코어 컨트롤러': BASE+'KEMHIHOF', '아스트라 데카코어 컨트롤러': '/astra/astra_30.png', '아스트라 아워글라스': '/astra/astra_31.png',
  '트랜스미터 type:A': BASE+'KEMHIEOC', '아스트라 트랜스미터': '/astra/astra_32.png',
  '진리의 노바의 정수': BASE+'KEMHJCOC', '아스트라 노바의 정수': '/astra/astra_33.png',
  'D100 커스텀 웨폰 벨트': BASE+'KEMHPPHPC', '아스트라 웨폰 벨트': '/astra/astra_34.png',
  '인피니트 헥스시커': BASE+'KEMHPHNC', '아스트라 헥스시커': '/astra/astra_35.png',
  '봄버드 센터파이어': BASE+'KEMHJOMD', '아스트라 림리스': '/astra/astra_36.png',
  '팔콘아이': BASE+'KEMHJOPD', '아스트라 레이븐아이': '/astra/astra_37.png',
  '체스피스 디 퀸': BASE+'KEMHIFOC', '아스트라 체스피스 디 킹': '/astra/astra_38.png',
  '세이크리드 로자리오': BASE+'KEMHJFPD', '아스트라 로자리오': '/astra/astra_39.png',
  '퍼펙트 렐릭': BASE+'KEMHIAOC', '아스트라 렐릭': '/astra/astra_40.png',
  '데르니에 카르트': BASE+'KEMHJGOC', '아스트라 카르트': '/astra/astra_41.png',
  '월장석 선추': BASE+'KEMHIPOC', '아스트라 금강석 선추': '/astra/astra_43.png',
  '버츄스 메달': BASE+'KEMHJFOD', '아스트라 메달': '/astra/astra_44.png',
  // 엠블렘
  '미트라의 분노 : 도적': BASE+'KEOLLCLJ', '미트라의 분노 : 전사': BASE+'KEOLLCLE',
  '미트라의 분노 : 마법사': BASE+'KEOLLCLG', '미트라의 분노 : 궁수': BASE+'KEOLLCLH', '미트라의 분노 : 해적': BASE+'KEOLLCLI',
  '골드 메이플리프 엠블렘': BASE+'KEOLLEOA', '골드 데몬 엠블렘': BASE+'KEOLLAOA', '골드 시그너스 엠블렘': BASE+'KEOLLPOA',
  '금빛 풍수사 엠블렘': BASE+'KEOLLCIA', '금빛 검수 엠블렘': '/item/lenEm.png', '골드 히어로즈 엠블렘': BASE+'KEOLLCMA',
  '골드 레지스탕스 엠블렘': BASE+'KEOLLBOA', '골드 나이트 엠블렘': BASE+'KEOLLCLD', '골드 어비스 엠블렘': BASE+'KEOLLCKB',
  '엔젤 엠블렘': BASE+'KEOLLGOA', '골드 크리스탈 엠블렘': BASE+'KEOLLCND', '이터널 타임 엠블렘': BASE+'KEOLLOOB',
  '골드 에이전트 엠블렘': BASE+'KEOLLCNB', '드래곤 엠블렘': BASE+'KEOLLHOA',
  '골드 키네시스 엠블렘': BASE+'KEOLKHOA', '금빛 천지인 엠블렘': BASE+'KEOLLCLB',
  '하이브리드 하트': BASE+'KEOLLFOA', '골드 체이서 엠블렘': BASE+'KEOLLCIC',
};

function getIconUrlMap() {
  return ICON_MAP;
}

function resolveIconUrl(name, map) {
  if (map[name]) return map[name];
  const TIERS = ['앱솔랩스', '아케인셰이드', '에테르넬'];
  const tier = TIERS.find(t => name.includes(t));
  if (tier) {
    if (name.includes('장갑')) return map[`${tier} 나이트글러브`] || '';
    if (name.includes('신발')) return map[`${tier} 나이트슈즈`] || '';
    if (name.includes('망토')) return map[`${tier} 나이트케이프`] || '';
    if (name.includes('어깨')) return map[`${tier} 나이트숄더`] || '';
  }
  if (name.includes('타일런트') && name.includes('벨트')) return map['타일런트 히아데스 벨트'] || '';
  if (name.includes('핑크 펜던트')) return map['핑크 펜던트(직업)'] || '';
  if (name.includes('퍼플 펜던트')) return map['퍼플 펜던트(직업)'] || '';
  return '';
}

// ─── Firebase 사용량 카운터 ────────────────────────────────
const FIREBASE_PROJECT = '';
const COUNTER_DOC = '';

// ─── 원격 킬스위치 ────────────────────────────────────────
async function checkKillSwitch(){}

async function trackApiCall(){}

// ─── 탭 전환 ─────────────────────────────────────────────
document.querySelectorAll('.tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach((t) => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach((c) => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab).classList.add('active');

    if (tab.dataset.tab === 'list') loadBookmarkList();
    if (tab.dataset.tab === 'ocr') loadSettings();
    if (tab.dataset.tab === 'advanced') loadPromptEditor();
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
      return { success: true, message: `"${newItem.name}" 추가 완료! 현재 북마크: ${current.state.bookmarkList.length}개\n아이템 메이커 창을 (F5)새로고침해주세요.` };
    } catch (e) {
      return { success: false, message: '오류: ' + e.message };
    }
  }, [item]);
}

async function removeBookmarkFromPage(index) {
  return execInPage((idx) => {
    try {
      const raw = localStorage.getItem('equipBookmarkList');
      const current = raw ? JSON.parse(raw) : { state: { bookmarkList: [] }, version: 0 };
      if (!current.state?.bookmarkList) return { success: false };
      current.state.bookmarkList.splice(idx, 1);
      localStorage.setItem('equipBookmarkList', JSON.stringify(current));
      return { success: true };
    } catch (e) {
      return { success: false };
    }
  }, [index]);
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

    listEl.innerHTML = list.map((item, i) => {
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
          <button class="bookmark-delete-btn" data-index="${i}" title="삭제">✕</button>
        </div>
      `;
    }).join('');

    listEl.querySelectorAll('.bookmark-delete-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.dataset.index);
        await removeBookmarkFromPage(idx);
        loadBookmarkList();
      });
    });
  } catch (e) {
    listEl.innerHTML = `<div class="empty-state">오류: ${e.message}</div>`;
  }
}

document.getElementById('btnRefresh')?.addEventListener('click', loadBookmarkList);

let toastTimer;
function showToast(message, type = 'default') {
  const toast = document.getElementById('toast');
  toast.innerText = message;
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

let cachedApiKey = '';

async function loadApiKey() {
  const result = await chrome.storage.local.get('maple_gemini_api_key');
  cachedApiKey = result.maple_gemini_api_key || '';
}

function getKeyId() {
  return cachedApiKey ? cachedApiKey.slice(-8) : 'nokey';
}

function quotaKey(model) {
  const id = getKeyId();
  return model === 'gemini-2.5-flash' ? `maple_quota_${id}_25` : `maple_quota_${id}_31`;
}

function quotaDateKey() {
  return `maple_quota_${getKeyId()}_date`;
}

function initAndCheckQuota() {
  const today = new Intl.DateTimeFormat('ko-KR', { timeZone: 'Asia/Seoul' }).format(new Date());
  const storedDate = localStorage.getItem(quotaDateKey());

  if (storedDate !== today) {
    localStorage.setItem(quotaDateKey(), today);
    localStorage.setItem(quotaKey('gemini-2.5-flash'), '0');
    localStorage.setItem(quotaKey('gemini-3.1-flash-lite-preview'), '0');
  }
  updateQuotaUI();
}

function updateQuotaUI() {
  const used25 = parseInt(localStorage.getItem(quotaKey('gemini-2.5-flash')) || '0');
  const used31 = parseInt(localStorage.getItem(quotaKey('gemini-3.1-flash-lite-preview')) || '0');

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
  const k = quotaKey(modelName);
  const current = parseInt(localStorage.getItem(k) || '0');
  localStorage.setItem(k, current + 1);
  updateQuotaUI();
}


// ═══════════════════════════════════════════════════════════
// 설정 및 상태 복구
// ═══════════════════════════════════════════════════════════
function loadSettings() {
  const input = document.getElementById('visionApiKey');
  if (input && cachedApiKey) {
    input.value = cachedApiKey;
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

document.getElementById('btnSaveKey')?.addEventListener('click', () => {
  const key = document.getElementById('visionApiKey').value.trim();
  if (!key) { setApiKeyStatus('키를 입력해주세요', 'err'); return; }
  if (!key.startsWith('AIza')) { setApiKeyStatus('⚠ 형식이 올바르지 않습니다 (AIza...)', 'err'); return; }
  
  cachedApiKey = key;
  chrome.storage.local.set({ 'maple_gemini_api_key': key });
  setApiKeyStatus('✓ 저장 완료', 'ok');
  initAndCheckQuota();
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

        chrome.storage.session.set({ ocr_preview_image: `data:${currentImageMediaType};base64,${currentImageBase64}` });
        document.getElementById('ocrPreview').src = `data:${currentImageMediaType};base64,${currentImageBase64}`;
        document.getElementById('ocrPreviewWrap').style.display = 'block';
        document.getElementById('dropZone').style.display = 'none';
        document.getElementById('btnRunOcr').disabled = false;

        renderOcrResult(state.parsed);
        const statusEl = document.getElementById('ocrStatus');
        statusEl.className = 'ocr-status ok';
        statusEl.textContent = `✓ 저장된 작업 내역을 불러왔습니다.`;
        statusEl.style.display = 'block';
        document.getElementById('btnRunOcr').textContent = '🔄 다시 분석하기';
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
  const btnOcr = document.getElementById('btnRunOcr');
  btnOcr.disabled = true;
  btnOcr.textContent = '🔍 AI로 아이템 옵션 읽기';
  document.getElementById('ocrResult').style.display = 'none';
  document.getElementById('ocrStatus').style.display = 'none';
  document.getElementById('fileInput').value = '';
}

function saveCurrentOcrState() {
  if (document.getElementById('ocrResult').style.display === 'none') return;
  const grid = document.getElementById('ocrParsedGrid');
  const data = {};
  grid.querySelectorAll('[data-key]').forEach(el => { data[el.dataset.key] = (el.value ?? el.dataset.value ?? '').trim(); });
  
  const state = {
    image: currentImageBase64,
    mediaType: currentImageMediaType,
    parsed: {
      name: data['name'], slot: data['slot'], part: data['part'], base_equipment_level: data['base_equipment_level'], scroll_upgrade: data['scroll_upgrade'], soul_name: data['soul_name'] || null, soul_option: data['soul_option'] || null,
      totalOption: { str: data['total_str'], dex: data['total_dex'], int: data['total_int'], luk: data['total_luk'], max_hp: data['total_max_hp'], attack_power: data['total_attack_power'], magic_power: data['total_magic_power'], all_stat: data['total_all_stat'], boss_damage: data['total_boss_damage'], damage: data['total_damage'], ignore_monster_armor: data['total_ignore_monster_armor'], armor: data['total_armor'], max_hp_rate: data['total_max_hp_rate'] },
      potential_grade: data['potential_grade'], potential_option_1: [data['pot1'], data['pot2'], data['pot3']],
      additional_potential_grade: data['additional_potential_grade'], additional_potential_option_1: [data['add1'], data['add2'], data['add3']],
      exceptionalOption: { str: data['ex_all_stat'], dex: data['ex_all_stat'], int: data['ex_all_stat'], luk: data['ex_all_stat'], max_hp: data['ex_hpmp'], max_mp: data['ex_hpmp'], attack_power: data['ex_atkmag'], magic_power: data['ex_atkmag'], exceptional_upgrade: data['ex_upgrade'] }
    }
  };
  localStorage.setItem('maple_ocr_state', JSON.stringify(state));
}

let viewerWindowId = null;

function openViewerWindow() {
  if (viewerWindowId !== null) {
    chrome.windows.remove(viewerWindowId, () => { if (chrome.runtime.lastError) {} });
    viewerWindowId = null;
  }
  chrome.windows.create({
    url: chrome.runtime.getURL('popup/viewer.html'),
    type: 'popup',
    width: 520,
    height: 820
  }, (win) => { viewerWindowId = win.id; });
}

function closeViewerWindow() {
  if (viewerWindowId !== null) {
    chrome.windows.remove(viewerWindowId, () => { if (chrome.runtime.lastError) {} });
    viewerWindowId = null;
  }
}

document.getElementById('btnClearImage')?.addEventListener('click', clearOcrState);
document.getElementById('btnResetState')?.addEventListener('click', () => { clearOcrState(); showToast('상태가 깔끔하게 초기화되었습니다.', 'success'); });
document.getElementById('btnOpenViewer')?.addEventListener('click', openViewerWindow);

const chkAutoViewer = document.getElementById('chkAutoViewer');
if (chkAutoViewer) {
  chkAutoViewer.checked = (localStorage.getItem('maple_auto_viewer') ?? 'true') !== 'false';
  chkAutoViewer.addEventListener('change', () => {
    localStorage.setItem('maple_auto_viewer', chkAutoViewer.checked);
  });
}
document.getElementById('ocrParsedGrid')?.addEventListener('input', saveCurrentOcrState);

document.addEventListener('click', () => {
  document.querySelectorAll('.grade-select.open').forEach(el => el.classList.remove('open'));
});

document.getElementById('ocrParsedGrid')?.addEventListener('click', (e) => {
  const trigger = e.target.closest('.grade-select-trigger');
  const item = e.target.closest('.grade-select-item');

  if (trigger) {
    e.stopPropagation();
    const select = trigger.closest('.grade-select');
    const wasOpen = select.classList.contains('open');
    document.querySelectorAll('.grade-select.open').forEach(el => el.classList.remove('open'));
    if (!wasOpen) select.classList.add('open');
    return;
  }

  if (item) {
    e.stopPropagation();
    const select = item.closest('.grade-select');
    const value = item.dataset.value;
    select.dataset.value = value;

    const triggerEl = select.querySelector('.grade-select-trigger');
    triggerEl.textContent = value || '없음';
    triggerEl.className = 'grade-select-trigger' + (value ? ` grade-trigger-${value}` : '');

    select.querySelectorAll('.grade-select-item').forEach(i =>
      i.classList.toggle('selected', i.dataset.value === value)
    );
    select.classList.remove('open');
    saveCurrentOcrState();
  }
});

function setImage(file) {
  currentImageMediaType = file.type || 'image/png';
  const reader = new FileReader();
  reader.onload = (e) => {
    const dataUrl = e.target.result;
    currentImageBase64 = dataUrl.split(',')[1];
    document.getElementById('ocrPreview').src = dataUrl;
    document.getElementById('ocrPreviewWrap').style.display = 'block';
    document.getElementById('dropZone').style.display = 'none';
    const btnOcr = document.getElementById('btnRunOcr');
    btnOcr.disabled = false;
    btnOcr.textContent = '🔍 AI로 아이템 옵션 읽기';
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
8-1. 아이템이 slot이 '무기' 이고 최하단에 소울이 존재한다면 soul_name에 소울 등급명만(예: "화려한 소울", "강력한 소울", "위대한 소울", "놀라운 소울" 등등 이미지의 소울 이름 앞 등급 단어에 해당하는 것)을 적고, soul_option에 효과를 작성하세요.
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
- 강화 횟수 추출: "익셉셔널 : N회", 어떤 형식이든 현재까지 강화된 횟수 N을 exceptional_upgrade 키에 정수로 입력하세요. (예: "익셉셔널 : 1회" -> exceptional_upgrade: 1)

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
        parts: [{ text: localStorage.getItem('maple_custom_prompt') || GEMINI_PROMPT }, { inline_data: { mime_type: mediaType, data: base64Image } }]
      }],
      generationConfig: { response_mime_type: "application/json" }
    })
  });

  if (!response.ok) {
    const err = await response.json();
    let msg = err.error?.message || `HTTP ${response.status}`;
    if (msg.includes("experiencing high demand")) {
      msg = selectedModel === 'gemini-2.5-flash'
        ? "현재 서버가 너무 혼잡합니다. 잠시 후 다시 시도해주세요."
        : "현재 서버가 너무 혼잡합니다. 잠시 후 다시 시도하거나 2.5 Flash 모델을 사용해 보세요.";
    }
    throw new Error(msg);
  }

  increaseUsedQuota(selectedModel);

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '{}';
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
  const GRADE_OPTIONS = ['', '레어', '에픽', '유니크', '레전드리'];
  const gradeSelect = (label, value, key) => {
    const items = GRADE_OPTIONS.map(g =>
      `<div class="grade-select-item${g === value ? ' selected' : ''}${g ? ` grade-item-${g}` : ''}" data-value="${g}">${g || '없음'}</div>`
    ).join('');
    const triggerClass = value ? ` grade-trigger-${value}` : '';
    return `<div class="ocr-field"><span class="ocr-field-label">${label}</span><div class="grade-select" data-key="${key}" data-value="${value || ''}"><div class="grade-select-trigger${triggerClass}">${value || '없음'}</div><div class="grade-select-menu">${items}</div></div></div>`;
  };
  const t = parsed.totalOption || {};
  const statField = (label, statKey) => field(label, t[statKey] ?? '0', `total_${statKey}`);
  const statFieldPct = (label, statKey) => field(label, (parseInt(t[statKey]) || 0) + '%', `total_${statKey}`);

  const hasPotential = !!parsed.potential_grade;
  const hasAdditional = !!parsed.additional_potential_grade;
  const ex = parsed.exceptionalOption || {};
  const hasExceptional = parseInt(ex.exceptional_upgrade) > 0 || ['str','dex','int','luk','max_hp','max_mp','attack_power','magic_power'].some(k => parseInt(ex[k]) > 0);

  const isWeapon = parsed.slot === '무기';
  const isWeaponOrSub = isWeapon || parsed.slot === '보조무기';

  const sections = [
    sectionHead('기본 정보'), field('아이템명', parsed.name, 'name'), field('부위', parsed.slot, 'slot'), ...(isWeaponOrSub ? [field('세부 명칭', parsed.part ?? '', 'part')] : []), field('요구 레벨', parsed.base_equipment_level ?? '0', 'base_equipment_level'), field('주문서', parsed.scroll_upgrade ?? '0', 'scroll_upgrade'), ...(isWeapon ? [field('소울 등급', parsed.soul_name ?? '', 'soul_name'), field('소울 옵션', parsed.soul_option ?? '', 'soul_option')] : []),
    sectionHead('총합 스탯 (확인 후 수정 가능)'), statField('STR', 'str'), statField('DEX', 'dex'), statField('INT', 'int'), statField('LUK', 'luk'), statFieldPct('올스탯', 'all_stat'), statField('최대HP', 'max_hp'), statFieldPct('최대HP%', 'max_hp_rate'), statField('공격력', 'attack_power'), statField('마력', 'magic_power'), statFieldPct('데미지%', 'damage'), statFieldPct('보공%', 'boss_damage'), statFieldPct('방무%', 'ignore_monster_armor'),
    ...(hasPotential ? [sectionHead('잠재능력'), gradeSelect('잠재 등급', parsed.potential_grade, 'potential_grade'), field('잠재 1', parsed.potential_option_1?.[0], 'pot1'), field('잠재 2', parsed.potential_option_1?.[1], 'pot2'), field('잠재 3', parsed.potential_option_1?.[2], 'pot3')] : []),
    ...(hasAdditional ? [sectionHead('에디셔널 잠재능력'), gradeSelect('에디 등급', parsed.additional_potential_grade, 'additional_potential_grade'), field('에디 1', parsed.additional_potential_option_1?.[0], 'add1'), field('에디 2', parsed.additional_potential_option_1?.[1], 'add2'), field('에디 3', parsed.additional_potential_option_1?.[2], 'add3')] : []),
    ...(hasExceptional ? [sectionHead('익셉셔널 옵션'), field('올스탯', ex.str ?? '0', 'ex_all_stat'), field('최대HP/MP', ex.max_hp ?? '0', 'ex_hpmp'), field('공격력/마력', ex.attack_power ?? '0', 'ex_atkmag'), field('강화횟수', ex.exceptional_upgrade ?? 0, 'ex_upgrade')] : []),
  ];

  grid.innerHTML = sections.join('');
  document.getElementById('ocrResult').style.display = 'block';
}

function buildItemFromOcrResult() {
  const grid = document.getElementById('ocrParsedGrid');
  const data = {}; grid.querySelectorAll('[data-key]').forEach(el => { data[el.dataset.key] = (el.value ?? el.dataset.value ?? '').trim(); });
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
    exceptionalOption: { str: getN('ex_all_stat'), dex: getN('ex_all_stat'), int: getN('ex_all_stat'), luk: getN('ex_all_stat'), max_hp: getN('ex_hpmp'), max_mp: getN('ex_hpmp'), attack_power: getN('ex_atkmag'), magic_power: getN('ex_atkmag'), exceptional_upgrade: parseInt(data['ex_upgrade'] || '0') || 0 },
    hasExceptional: (parseInt(data['ex_all_stat']) > 0 || parseInt(data['ex_hpmp']) > 0 || parseInt(data['ex_atkmag']) > 0),
    soul_name: data['soul_name'] || null, soul_option: soulOption, ring_level: 0, itemScore: '0', character_name: 'ocr' + new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).replace(/\D/g, ''), class_group: '전사', cuttable_count: '255', title: '', bookMark: true, base_equipment_level: baseEqLevel,
  };
}

// ─── 버튼 리스너 ───────────────────────────────────────────
document.getElementById('btnRunOcr')?.addEventListener('click', async () => {
  const apiKey = cachedApiKey || document.getElementById('visionApiKey').value.trim();
  if (!apiKey) { showToast('Gemini API 키를 먼저 저장해주세요', 'error'); return; }
  if (!currentImageBase64) { showToast('이미지를 먼저 업로드해주세요', 'error'); return; }

  const statusEl = document.getElementById('ocrStatus');
  const btn = document.getElementById('btnRunOcr');
  statusEl.style.display = 'block';
  statusEl.className = 'ocr-status loading';
  let dotCount = 1;
  statusEl.textContent = '🤖 AI 분석 중, 조금만 기다려 주세요.';
  const dotTimer = setInterval(() => {
    dotCount = (dotCount % 4) + 1;
    statusEl.textContent = '🤖 AI 분석 중, 조금만 기다려 주세요' + '.'.repeat(dotCount);
  }, 500);
  btn.disabled = true;
  document.getElementById('ocrResult').style.display = 'none';

  const blockPaste = (e) => { e.preventDefault(); e.stopPropagation(); };
  document.addEventListener('paste', blockPaste, true);
  document.getElementById('btnClearImage')?.setAttribute('disabled', '');
  document.getElementById('btnResetState')?.setAttribute('disabled', '');

  try {
    const parsed = await runGeminiVision(currentImageBase64, currentImageMediaType, apiKey);
    statusEl.className = 'ocr-status ok';

    if (parsed.name) {
      if (parsed.name.includes('라피스')) { parsed.part = '대검'; parsed.slot = '무기'; }
      else if (parsed.name.includes('라즐리')) { parsed.part = '태도'; parsed.slot = '보조무기'; }
    }

    statusEl.textContent = `✓ 분석 완료! "${parsed.name || '이름 미인식'}" — 수치를 확인 후 추가하세요.`;

    renderOcrResult(parsed);
    saveCurrentOcrState();
    trackApiCall();
    btn.textContent = '🔄 다시 분석하기';

    const submitBtn = document.getElementById('btnOcrSubmit');
    if (submitBtn) { submitBtn.disabled = true; setTimeout(() => { submitBtn.disabled = false; }, 1000); }

    chrome.storage.session.set({ ocr_preview_image: `data:${currentImageMediaType};base64,${currentImageBase64}` });
    if (localStorage.getItem('maple_auto_viewer') === 'true') openViewerWindow();

  } catch (e) {
    statusEl.className = 'ocr-status err';
    statusEl.textContent = '✗ 오류: ' + e.message;
    console.error('[Gemini OCR]', e);
  } finally {
    clearInterval(dotTimer);
    btn.disabled = false;
    document.removeEventListener('paste', blockPaste, true);
    document.getElementById('btnClearImage')?.removeAttribute('disabled');
    document.getElementById('btnResetState')?.removeAttribute('disabled');
  }
});

document.getElementById('btnOcrSubmit')?.addEventListener('click', async (e) => {
  const submitBtn = e.currentTarget;
  if (submitBtn.disabled) return;
  submitBtn.disabled = true;
  setTimeout(() => { submitBtn.disabled = false; }, 1000);

  if (!(await checkPageStatus())) return;
  try {
    const item = buildItemFromOcrResult();
    if (!item.name) throw new Error('아이템 이름이 없습니다.');
    if (!item.slot) throw new Error('부위가 없습니다.');
    item.iconUrl = resolveIconUrl(item.name, getIconUrlMap());
    const res = await addBookmarkToPage(item);

    if (res.success) { showToast(res.message, 'success'); closeViewerWindow(); }
    else { showToast(res.message, 'error'); }
  } catch (e) {
    showToast(e.message, 'error');
  }
});

// ─── 고급: 프롬프트 편집기 ────────────────────────────────
function loadPromptEditor() {
  const editor = document.getElementById('promptEditor');
  const status = document.getElementById('promptStatus');
  if (!editor) return;

  const saved = localStorage.getItem('maple_custom_prompt');
  editor.value = saved || GEMINI_PROMPT;

  if (saved) {
    status.textContent = '⚠ 현재 수정된 프롬프트를 사용 중입니다.';
    status.className = 'prompt-status warn';
  } else {
    status.textContent = '기본 프롬프트를 사용 중입니다.';
    status.className = 'prompt-status';
  }
}

document.getElementById('btnSavePrompt')?.addEventListener('click', () => {
  const val = document.getElementById('promptEditor').value.trim();
  if (!val) return;
  localStorage.setItem('maple_custom_prompt', val);
  const status = document.getElementById('promptStatus');
  status.textContent = '⚠ 현재 수정된 프롬프트를 사용 중입니다.';
  status.className = 'prompt-status warn';
  showToast('프롬프트가 저장되었습니다.', 'success');
});

document.getElementById('btnResetPrompt')?.addEventListener('click', () => {
  localStorage.removeItem('maple_custom_prompt');
  document.getElementById('promptEditor').value = GEMINI_PROMPT;
  const status = document.getElementById('promptStatus');
  status.textContent = '기본 프롬프트를 사용 중입니다.';
  status.className = 'prompt-status';
  showToast('기본 프롬프트로 초기화되었습니다.', 'success');
});

// ─── 업데이트 확인 ────────────────────────────────────────
const GITHUB_MANIFEST_URL = 'https://raw.githubusercontent.com/miamdaegun/maplescouter_ocr/main/manifest.json';

async function checkForUpdates() {
  if (localStorage.getItem('maple_auto_update') !== 'true') return;
  try {
    const res = await fetch(GITHUB_MANIFEST_URL + '?t=' + Date.now());
    const remote = await res.json();
    const local = chrome.runtime.getManifest().version;
    if (remote.version !== local) {
      const banner = document.getElementById('updateBanner');
      document.getElementById('updateBannerText').textContent =
        `새 버전이 있습니다! (현재 ${local} → 최신 ${remote.version})`;
      banner.style.display = 'flex';
    }
  } catch (_) {}
}

const chkAutoUpdate = document.getElementById('chkAutoUpdate');
if (chkAutoUpdate) {
  chkAutoUpdate.checked = (localStorage.getItem('maple_auto_update') ?? 'true') !== 'false';
  chkAutoUpdate.addEventListener('change', () => {
    localStorage.setItem('maple_auto_update', chkAutoUpdate.checked);
  });
}

document.getElementById('btnDismissUpdate')?.addEventListener('click', () => {
  document.getElementById('updateBanner').style.display = 'none';
});


// ─── 설정 백업 / 복원 ─────────────────────────────────────
const BACKUP_DEFAULTS = {
  'maple_gemini_api_key': '',
  'maple_selected_model': 'gemini-2.5-flash',
  'maple_auto_viewer': 'true',
  'maple_auto_update': 'true',
  'maple_custom_prompt': '',
};

document.getElementById('btnExportSettings')?.addEventListener('click', async () => {
  const settings = {};
  Object.entries(BACKUP_DEFAULTS).forEach(([k, defaultVal]) => {
    settings[k] = k === 'maple_gemini_api_key' ? (cachedApiKey || defaultVal) : (localStorage.getItem(k) ?? defaultVal);
  });

  const blob = new Blob([JSON.stringify(settings, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'maplescouter_settings.json';
  a.click();
  URL.revokeObjectURL(url);
  showToast('설정이 백업되었습니다.', 'success');
});

document.getElementById('btnImportSettings')?.addEventListener('click', () => {
  document.getElementById('importFileInput').click();
});

document.getElementById('importFileInput')?.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (ev) => {
    try {
      const settings = JSON.parse(ev.target.result);
      Object.keys(BACKUP_DEFAULTS).forEach(k => {
        if (settings[k] === undefined) return;
        if (k === 'maple_gemini_api_key') {
          cachedApiKey = settings[k];
          chrome.storage.local.set({ 'maple_gemini_api_key': settings[k] });
        } else {
          localStorage.setItem(k, settings[k]);
        }
      });
      loadSettings();
      showToast('설정이 복원되었습니다.', 'success');
    } catch (_) {
      showToast('올바른 백업 파일이 아닙니다.', 'error');
    }
    e.target.value = '';
  };
  reader.readAsText(file);
});

// ─── 초기 구동 ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  await loadApiKey();
  await checkKillSwitch();
  document.getElementById('btnWarningConfirm')?.addEventListener('click', () => {
    document.getElementById('warningOverlay').style.display = 'none';
  });
  checkPageStatus();
  loadSettings();
  loadSavedOcrState();
  checkForUpdates();
});