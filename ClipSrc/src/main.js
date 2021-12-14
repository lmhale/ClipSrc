// import App from './App.svelte';
import PopUp from './PopUp.svelte'

// const app = new App({
// 	target: document.getElementById('app'),
// });
const extensionView = new PopUp({
	target: document.getElementById("extension")
})

export default PopUp;