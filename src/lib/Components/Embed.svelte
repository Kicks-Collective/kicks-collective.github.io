<script lang="ts">
	export let title: string;
	export let description: string = '';
</script>

<svelte:head>
	<meta content={title} property="og:title" />
	<meta content={description} property="og:description" />
	<meta content="/" property="og:url" />
	<meta content="#f04f39" data-react-helmet="true" name="theme-color" />
</svelte:head>