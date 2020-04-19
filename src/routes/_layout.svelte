<script>
	// import Nav from '../components/Nav.svelte';
	import Nav from '../components/NewNav.svelte';

	export let segment;
</script>

<style>
	.app-container {
		display: flex;
		flex-direction: row-reverse;
		height: 100vh;
		width: 100vw;
		align-items: stretch;
	}

	main {
		position: relative;
		max-width: 56em;
		background-color: #fafafa;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<div class="app-container">
	<Nav {segment}/>

	<main>
		<slot></slot>
	</main>
</div>
