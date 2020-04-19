<script>
	import Header from '../components/Header.svelte';
	// import Nav from '../components/Nav.svelte';
	import Nav from '../components/NewNav.svelte';
	// import MediaQuery from "svelte-media-query";
	import { media } from '../stores';

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
	.content {
		width: 100%;
	}
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<div class="app-container">
	<!-- <MediaQuery query="screen and (min-width: 769px)" let:isDesktop> -->
		{#if $media.desktop}
			<Header />
		{/if}
	<!-- </MediaQuery> -->
	<div class="content">
		<Nav {segment}/>
		<main>
			<slot></slot>
		</main>
	</div>
</div>

<!-- <MediaQuery query="screen and (min-width: 769px)" let:isMobile>
</MediaQuery> -->
