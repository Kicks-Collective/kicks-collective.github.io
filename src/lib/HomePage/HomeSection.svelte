<script lang="ts">
	import { onMount } from 'svelte';
	import { quintInOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	import IntersectionObserver from 'svelte-intersection-observer';
	import ProjectCard from './ProjectCard.svelte';
	import Icon from '@iconify/svelte';

	let firstVideoLoaded: boolean = false;
	let nextVideoLoaded: boolean = false;

	let index = 0;

	let videos: string[] = [
		'/menuvideos/Dec 1 2024 Video.mp4',
		'/menuvideos/Nov 28 2024 Video.mp4',
		'/menuvideos/Nov 28 2024 Video (1).mp4',
		'/menuvideos/Nov 28 2024 Video (2).mp4',
		'/menuvideos/Dec 2 2024 Video.mp4'
	];

	shuffleArray(videos);

	function shuffleArray(array: string[]): string[] {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	async function loadNextvideo() {
		let nextIndex = (index + 1) % videos.length;
		if (nextIndex < 0) nextIndex = videos.length + index;

		await awaitNextVideoLoad();

		index = nextIndex;
	}

	async function cacheNextVideo() {
		nextVideoLoaded = false;

		let nextIndex = (index + 1) % videos.length;
		if (nextIndex < 0) nextIndex = videos.length + index;

		const v = document.createElement('video');
		v.src = videos[nextIndex];
		v.addEventListener('loadeddata', () => {
			nextVideoLoaded = true;
		});
	}

	async function awaitNextVideoLoad() {
		while (!nextVideoLoaded) {
			await new Promise((resolve) => setTimeout(resolve, 100));
		}
		return true;
	}

	onMount(() => {
		const v = document.createElement('video');
		v.src = videos[0];
		v.addEventListener('loadeddata', () => {
			firstVideoLoaded = true;
		});
	});

	let node: HTMLDivElement;
</script>

<div class="all-center relative flex h-screen w-full p-5 text-white">
	<div
		class="flex -translate-y-7 flex-col items-start justify-evenly rounded-lg bg-primary p-5 sm:-translate-y-0"
	>
		<img src="/largelogoalt.png" class="h-32 rounded-md object-contain" alt="Logo" />
		<div class="text-sm all-center flex w-full animate-bounce gap-1 sm:text-2xl">
			<p>Making</p>
			<p class="animate-cross line-through transition-all">kick ass</p>
			<p>games in <a href="https://sbox.game/nolankicks" class="text-alt">s&box</a></p>
		</div>
	</div>
	{#if videos && firstVideoLoaded}
		{#each [videos[index]] as src (index)}
			<video
				preload="auto"
				autoplay
				muted
				class="absolute -z-20 h-full w-full object-cover blur-md"
				on:loadeddata={() => cacheNextVideo()}
				on:ended={() => loadNextvideo()}
				in:fly={{ duration: 300, x: '100%', opacity: 1, easing: quintInOut }}
				out:fly={{ duration: 300, x: '-100%', opacity: 1, easing: quintInOut }}
			>
				<source {src} type="video/mp4" />
			</video>
		{/each}
	{/if}

	<img
		src="/forts.png"
		class="absolute -z-40 h-full w-full object-cover blur grayscale-[30%]"
		alt="Fortwars"
	/>

	<Icon class="absolute bottom-12 scale-[2]" icon="material-symbols:arrow-downward-rounded" />
</div>
