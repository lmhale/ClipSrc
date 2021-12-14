
console.log('background running')
chrome.runtime.onMessage.addListener(receiver)

function receiver(request, sender, response){
    console.log(request)
}