function isTwitterStatusUrl(url) {
  const twitterStatusRegex = /twitter\.com\/[^\/]+\/status\/[^\/]+$/;
  return twitterStatusRegex.test(url);
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log("hide reply extension", tab.url, isTwitterStatusUrl(tab.url));
  if (changeInfo.status === "complete" && isTwitterStatusUrl(tab.url)) {
    console.log("hide reply extension", tab.url, "executed");
    chrome.scripting.executeScript({
      target: { tabId },
      files: ["hideReply.js"],
    });
  }
});
