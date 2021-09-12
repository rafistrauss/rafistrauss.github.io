<script context="module">
	import Seo from '$lib/Seo/index.svelte';
</script>

<script>
	export let title, outline, slug;
	import './blog.scss';
</script>

<svelte:head>
	<Seo
		pageTitle={title}
		pageDescription={outline}
		pageUrl={`https://rafistrauss.com/blog/${slug}`}
		pageType="article"
	/>
</svelte:head>

<article class="blog-post">
	<slot />
</article>

<style>
</style>
