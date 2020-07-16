/* eslint-disable no-undef */
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.cookies.getAll({}, (cookies) => {
  var cookie = cookies.filter(c => c.name === '_x')[0];
  if (cookie) {
    chrome.storage.local.set({'_x': cookie.value});
  }
})

chrome.cookies.onChanged.addListener((info) => {
  console.log('cookie changed', info);
  if (info.cookie.name === '_x') {
    if (!info.removed) {
      chrome.storage.local.set({'_x': info.cookie.value})
    }
    else {
      chrome.storage.local.remove(['_x']);
    }
  }
});

var onMessageListener = function(message, sender, sendResponse) {
  switch(message.type) {
      case "bglog":
          console.log(message.obj);
      break;
  }
  return true;
}
chrome.runtime.onMessage.addListener(onMessageListener);
