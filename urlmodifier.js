"use strict";

var host = "https://www.google.com";
chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return {
      redirectUrl: host
    };
  },
  {
    urls: [
      "<all_urls>"
    ],
    // types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object", "xmlhttprequest", "ping", "csp_report", "media", "websocket", "other"]
  },
  ["blocking"]
);