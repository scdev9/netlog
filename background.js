chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log("URL: " + details.url);
    console.log("Method: " + details.method);
    console.log("Type: " + details.type);
    console.log("Request Body: ", details.requestBody);
    return {};
  },
  {urls: ["<all_urls>"]},
  ["requestBody"]
);

chrome.webRequest.onCompleted.addListener(
  function(details) {
    console.log("Completed request to: " + details.url);
    console.log("Status code: " + details.statusCode);
    console.log("Response headers: ", details.responseHeaders);
    return {};
  },
  {urls: ["<all_urls>"]},
  ["responseHeaders"]
);
