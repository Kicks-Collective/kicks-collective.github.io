<script lang="ts">
	import '../app.css';
	import Header from '$lib/Header.svelte';

	let { children } = $props();
</script>


<div class="fixed w-full h-full bg-altalt -z-50"></div>


<!-- <Header /> -->

{@render children()}