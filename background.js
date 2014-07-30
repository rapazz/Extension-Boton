

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