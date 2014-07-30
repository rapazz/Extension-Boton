
<<<<<<< HEAD

chrome.runtime.onInstalled.addListener(function(e){
console.log(e)
if (e.reason=="install")
chrome.tabs.query({}, function(tabs) {
   
    for (var i=0;i<=tabs.length-1;i++)
    {
    if (tabs[i].url.indexOf("mail.google.com")!=-1)
    {

    chrome.tabs.executeScript(tabs[i].id, {file: "jquery-2.1.1.min.js"});
    //cargarScript()
    chrome.tabs.executeScript(tabs[i].id, {file: "contentscript.js"});
      
    }
      
    }
});

//console.log(e)
})
=======
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
>>>>>>> FETCH_HEAD
