<script lang="ts">
	import { onMount } from 'svelte';
	import { quintInOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	import IntersectionObserver from 'svelte-intersection-observer';
	import ProjectCard from './ProjectCard.svelte';

	let firstVideoLoaded: boolean = false;
	let nextVideoLoaded: boolean = false;

	let elementOnce;
	let intersectOnce;

	let index = 0;

	let projects: GameProject[] = [
		{
			title: 'Open Forts',
			description: 'An open source implementation of GMOD Fortwars in s&box',
			image: '/openforts.png',
			status: 'Sep 2024 - Dec 2024',
			link: 'https://sbox.game/nolankicks/fortwars'
		},
		{
			title: 'Ringworld',
			description: 'A Halo inspired game mode for s&box',
			status: 'In Development',
		}
	];

	let videos: string[] = ['/Dec 23 2023 Video.mp4'];

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

<div class="relative flex h-[42rem] w-full items-center justify-center overflow-hidden">
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

	<IntersectionObserver element={node} let:intersecting once>
		<div class="flex h-[100%] w-full max-w-4xl flex-col items-center px-5 py-10" bind:this={node}>
			{#if intersecting}
				<div
					transition:fly={{ delay: 600, y: '60%', easing: quintInOut }}
					class="flex h-full w-full flex-col"
				>
					<div class="flex flex-shrink-0 flex-col">
						<div class="mb-2 text-center text-3xl font-bold">
							We strive to create compeling and enjoyable experiences in s&box
						</div>
						<div class="mb-2 h-1 w-full rounded-md bg-white"></div>
					</div>

					<div
						transition:fly={{ delay: 1000, y: '100%', easing: quintInOut }}
						class="flex h-full w-full flex-shrink flex-col text-xl"
					>
						<div class="grid grid-rows-4 md:grid-cols-2 grid-cols-1 grid-flow-col md:grid-flow-row gap-4">
							{#each projects as project}
								<ProjectCard project={project} />
							{/each}
						</div>
					</div>
				</div>
			{/if}
		</div>
	</IntersectionObserver>
</div>

<style>
	@keyframes fly-out {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%);
		}
	}
	@keyframes fly-in {
		0% {
			transform: translateX(100%);
		}
		100% {
			transform: translateX(0);
		}
	}
</style>
