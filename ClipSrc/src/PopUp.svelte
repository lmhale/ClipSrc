
<script>
   
    let tag ="";
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
    async function postData () {
        console.log("tag", tag)
		const res = await fetch('http://localhost:8080/clips', {
			method: 'POST',
			body: JSON.stringify({
				textSnippet,
				url,
                tag
		})
    })
		
		const json = await res.json()
		console.log('j',JSON.stringify(json)) 
	} 

    function handleSubmit() {
        // let info = textSnippet + '\n' + selected.text
        // alert(info)

    }
</script>

<main>
    <h1>ClipSRC Extension</h1>
    <form on:submit|preventDefault={postData}>
        <label for="link">Link:</label>
        <input name="link" value={url}> 
        <textarea bind:value={textSnippet}/>
        <label for="tag">Tag:</label>
        <input name="tag" bind:value={tag}> 
        <!-- <select for="tag" bind:value={selected} on:change="{() => selected = selected}" >
            {#each tags as tag}
                <option value={tag}>
                    {tag.text}
                </option>
            {/each}
        </select> -->
        <button id="save_button" type=submit>Save</button>
    </form>
</main>

