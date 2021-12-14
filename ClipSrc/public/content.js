//  let saveButton= document.getElementById("save");
// saveButton.addEventListener("click",async ()=> {
//   let url = window.location.href
//   console.log("hi", url)
// })
// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });


// When the button is clicked, inject setPageBackgroundColor into current page
// changeColor.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//   console.log("tab", tab)
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: getCurrentUrl,
//   });
// });

// The body of this function will be executed as a content script inside the
// current page
// function setPageBackgroundColor() {
//   chrome.storage.sync.get("color", ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// }

window.addEventListener("mouseup", selectWords)

  function getCurrentUrl(){
    // let url = window.location.href
    // console.log("hi", url)
  }
  function selectWords(){
    let textSnippet = window.getSelection().toString()
    console.log(textSnippet)
    if(textSnippet.length > 0){
      let message = {
        text:textSnippet,
        url: window.location.href
      }
      chrome.runtime.sendMessage(message)
    }
  }