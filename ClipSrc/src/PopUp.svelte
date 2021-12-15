
<script>
   
//will dynamically grab tags from back end
let tags = [
		{ id: 1, text: `quickCapture` },
		{ id: 2, text: `history` },
		{ id: 3, text: `coding` }
	];

    let selected;
    let answer;

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
  
    async function postData(){
        const res = await fetch('http://localhost:8080/api/lists', {
			method: 'POST',
			body: JSON({
				textSnippet,
				url,
                selected
			})
		})
		
		const json = await res.json()
		console.log(JSON.stringify(json))
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
        <select for="tag" bind:value={selected} on:change="{() => selected = selected}" >
            {#each tags as tag}
                <option value={tag}>
                    {tag.text}
                </option>
            {/each}
        </select>
        <button id="save_button" type=submit>Save</button>
    </form>
</main>

