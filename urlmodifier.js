"use strict";

// chrome.webRequest.onBeforeRequest.addListener(
//   function (details) {
//     return {
//       redirectUrl: "https://www.google.com"
//     };
//   },
//   {
//     urls: [
//       "<all_urls>"
//     ]
//   },
//   ["blocking"]
// );

chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    details.requestHeaders.push({name: "Access-Control-Allow-Origin", value: "*"});
    return {requestHeaders: details.requestHeaders};
  },
  {
    urls: [
      "<all_urls>"
    ]
  },
  ["blocking", "requestHeaders"]
);
