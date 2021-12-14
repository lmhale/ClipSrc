
<script>
    let textSnippet;
    let url;
       chrome.storage.local.get(['txtS'], function(result) {
        console.log('Value currently is ' + result.txtS);
        textSnippet = result.txtS
    });

    chrome.storage.local.get(["url"],
    function(result) {
        console.log("Url is" + result.url)
        url = result.url
    });
    function handleClick() {
    
        alert(textSnippet)
     
    }
</script>

<main>
    <h1>ClipSRC Extension</h1>
    <form>
        <input value={url}> 
        <textarea bind:value={textSnippet}/>
        <button id="save_button" on:click={handleClick}>Save</button>
    </form>
</main>

