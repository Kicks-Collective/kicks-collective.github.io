<script lang="ts">
	import { onMount } from 'svelte';
	import { quintInOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	import IntersectionObserver from 'svelte-intersection-observer';
	import ProjectCard from './ProjectCard.svelte';

	let firstVideoLoaded: boolean = false;
	let nextVideoLoaded: boolean = false;

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
			image: ''
		}
	];
	
	let node: HTMLDivElement;
</script>

<div class="relative flex h-[42rem] w-full items-center justify-center overflow-hidden">
	<IntersectionObserver element={node} let:intersecting once>
		<div class="flex h-[100%] w-full max-w-4xl flex-col items-center px-5 py-10" bind:this={node}>
			{#if intersecting}
				<div
					transition:fly={{ delay: 600, y: '60%', easing: quintInOut }}
					class="flex h-full w-full flex-col"
				>
					<div class="flex flex-shrink-0 flex-col">
						<div class="mb-2 text-center text-3xl font-bold drop-shadow-2xl">
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
