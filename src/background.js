chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: "document.querySelectorAll('[disabled]').forEach(function(e){e.removeAttribute('disabled');})"
  });
})