chrome.storage.session.get('ocr_preview_image', (result) => {
  if (result.ocr_preview_image) {
    document.getElementById('img').src = result.ocr_preview_image;
  }
});
