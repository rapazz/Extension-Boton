// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
//chrome.extension.onRequest.addListener(function(tab) {
  // No tabs or host permissions needed!
//  console.log('Agregando botton en GMAIL ' + tab.url + ' GO');
 //chrome.tabs.executeScript(null, {file: "contentscript.js"});

//});


// Check whether new version is installed
chrome.runtime.onInstalled.addListener(function(details){
  console.log(chrome.app.getDetails().content_scripts[0].js[0])
    if(details.reason == "install"){
        console.log("This is a first install!");
        chrome.tabs.executeScript(null, {file: chrome.app.getDetails().content_scripts[0].js[0]});
    }else if(details.reason == "update"){
        var thisVersion = chrome.runtime.getManifest().version;
        console.log("Updated from " + details.previousVersion + " to " + thisVersion + "!");
    }
});