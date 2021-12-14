
document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('save');
    btn.addEventListener('click', getText)

});

function getText(){
    chrome.storage.local.get(['txtS'], function(result) {
        console.log('Value currently is ' + result.txtS);
        alert(result.txtS)
      });
}
