
console.log('background running')


chrome.runtime.onStartup.addListener(getInitialUrl)

function getInitialUrl(){
  let initUrl = window.local.href
  chrome.storage.set({url:initUrl})
}



chrome.runtime.onMessage.addListener(receiver)

function receiver(request, sender, response){
    let textSnippet = request.text
    let theUrl = request.url
    console.log(textSnippet)
  chrome.storage.local.set({txtS: textSnippet}, function() {
  console.log('Value is set to ' + textSnippet);
  chrome.storage.local.set({url:theUrl}, function(){
    console.log("the url is set to"), theUrl
  })
});

}