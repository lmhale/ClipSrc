<script>
let data ={
	website_link: undefined,
	test_snippet: undefined,
	tag: undefined
};
let clips = []

import {onMount} from 'svelte'

onMount(async () => {

		const res = await fetch('http://localhost:8080/clips')
		clips = await res.json()
		clips = clips.data
	console.log('req',clips)

})

</script>

<main>
	<h1>ClipSRC</h1>
	{#each clips as clip(clip.id)}
	<ul>
	<li><b>Site Url:</b> {clip.url}</li>
	<li><b>Text Snippet:</b> {clip.textSnippet}</li>
	<li><b>#{clip.tag}</b></li>
	</ul>
	{/each}	

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
	ul {
		list-style-type: none
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>