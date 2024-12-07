<script lang="ts">
	let { children, style = "" } = $props();
</script>

<div class="flex {style} justify-center items-center h-16 gap-4 hover-pop press-pop cursor-pointer p-3 rounded-md drop-shadow-md hover:drop-shadow-xl">
    {@render children()}
</div>