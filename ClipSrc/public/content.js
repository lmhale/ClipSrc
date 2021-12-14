

window.addEventListener("mouseup", selectWords)



  function selectWords(){
   

    let textSnippet = window.getSelection().toString()
    console.log('selected:', window.getSelection())
    console.log(textSnippet)
    if(textSnippet.length > 0){
      let message = {
        text:textSnippet,
        url: window.location.href
      }
     
      chrome.runtime.sendMessage(message)
    }
  }

  