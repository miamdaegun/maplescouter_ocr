chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (sender.id !== chrome.runtime.id) return;

  if (request.action === 'addBookmark') {
    try {
      const newItem = request.item;

      const raw = localStorage.getItem('equipBookmarkList');
      const current = raw
        ? JSON.parse(raw)
        : { state: { bookmarkList: [] }, version: 0 };

      if (!current.state) current.state = { bookmarkList: [] };
      if (!current.state.bookmarkList) current.state.bookmarkList = [];

      // 중복 체크: name + slot + character_name 기준
      const isDuplicate = current.state.bookmarkList.some(
        (item) =>
          item.name === newItem.name &&
          item.slot === newItem.slot &&
          item.character_name === newItem.character_name
      );

      if (isDuplicate) {
        sendResponse({ success: false, message: '이미 동일한 아이템이 북마크에 존재합니다.' });
        return true;
      }

      current.state.bookmarkList.push(newItem);
      localStorage.setItem('equipBookmarkList', JSON.stringify(current));

      sendResponse({
        success: true,
        message: `"${newItem.name}" 추가 완료! 현재 북마크: ${current.state.bookmarkList.length}개`,
      });
    } catch (e) {
      sendResponse({ success: false, message: '오류: ' + e.message });
    }

    return true;
  }

  if (request.action === 'getBookmarkList') {
    try {
      const raw = localStorage.getItem('equipBookmarkList');
      const current = raw ? JSON.parse(raw) : { state: { bookmarkList: [] }, version: 0 };
      sendResponse({ success: true, list: current.state.bookmarkList });
    } catch (e) {
      sendResponse({ success: false, list: [] });
    }
    return true;
  }
});
