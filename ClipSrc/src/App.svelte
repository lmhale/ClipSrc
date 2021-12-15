<script>
let data ={
	website_link: undefined,
	test_snippet: undefined,
	tag: undefined
};
let theData;

import {onMount} from 'svelte'

onMount(async () => {

		const res = await fetch('http://localhost:8080/clips')
		theData = await res.json()
	console.log('req', theData)

})


//show on screen
</script>

<main>
	<h1>ClipSRC</h1>
	<!-- {data.url} -->

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

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>