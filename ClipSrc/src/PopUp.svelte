
<script>
    let textSnippet;
       chrome.storage.local.get(['txtS'], function(result) {
        console.log('Value currently is ' + result.txtS);
        textSnippet = result.txtS
    });


    function handleClick() {
    
        alert(textSnippet)
     
    }
</script>

<main>
    <h1>ClipSRC Extension</h1>
    <form>
        <textarea bind:value={textSnippet}/>
        <button id="save_button" on:click={handleClick}>Save</button>
    </form>
</main>

