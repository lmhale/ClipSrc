
console.log('background running')
chrome.runtime.onMessage.addListener(receiver)

function receiver(request, sender, response){
    let textSnippet = request.text
    console.log(textSnippet)
  chrome.storage.local.set({txtS: textSnippet}, function() {
  console.log('Value is set to ' + textSnippet);
});

}