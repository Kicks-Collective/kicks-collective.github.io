<script lang="ts">
	let { children } = $props();
</script>

<div
	class="flex h-16 cursor-pointer items-center justify-center gap-4 p-3 hover:scale-105 active:scale-95 transition-all"
>
	{@render children()}
</div>
