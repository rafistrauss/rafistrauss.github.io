<script context="module">
	export const prerender = true;
	import { items } from '$lib/projectData.js';
	import Picture from '$lib/Picture/index.svelte';
</script>

<script>
	import { onMount } from 'svelte';

	const pageAlreadyVisitedKey = 'pageVisited';
	const pageAlreadyVisitedValue = 'true';

	let pageVisited = false;

	const pageUrl = 'https://rafistrauss.com';
	const pageDescription =
		'The homepage for Rafi Strauss:  portfolio of his projects, resume, general info. Built with sveltekit. Blazing fast - straight 100s on core web vitals';
	const pageTitle = 'Rafi Strauss Portfolio: Homepage';
	const pageType = 'website';
	onMount(() => {
		pageVisited = sessionStorage.getItem(pageAlreadyVisitedKey) === pageAlreadyVisitedValue;
		sessionStorage.setItem(pageAlreadyVisitedKey, pageAlreadyVisitedValue);
		window.addEventListener('beforeunload', () => {
			sessionStorage.removeItem(pageAlreadyVisitedKey);
		});
	});
</script>

<svelte:head>
	<!-- <Seo {pageTitle} {pageDescription} {pageUrl} /> -->
	<title>{pageTitle}</title>
	<link rel="canonical" href={pageUrl} />
	<meta name="description" content={pageDescription} />
	<meta name="author" content="Rafi Strauss" />
	<meta property="og:url" content={pageUrl} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:type" content={pageType} />

	<!-- <meta property="og:image" content={ogImageUrl} />
	<meta property="og:image:secure_url" content={ogImageUrl} />
	<meta property="og:image:type" content={'image/jpg'} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="627" /> -->
</svelte:head>

<h2 class="projectsTitle">Projects</h2>

<section class={pageVisited ? 'hideAnimation' : ''} style="display: grid; ">
	{#each items as item, idx}
		<a
			class="item"
			title={`Project ${item.name}`}
			style="animation-delay: {idx * 0.2}s;"
			href="/projects/{item.slug}"
		>
			<div class="item__top-border" style="background-color: {item.color}; color: {item.textColor}">
				{item.name}
			</div>
			<Picture className="item__image-link" imageSource="/projectImages/resized/{item.imageLink}" alt="" />
		</a>
	{/each}
</section>

<style>
	/* section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	} */

	.projectsTitle {
		text-align: center;
		font-size: 2em;
	}

	section {
		display: grid;
		gap: 1em;
		grid-template-columns: repeat(1, 1fr);
	}
	@media all and (min-width: 768px) {
		section {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media all and (min-width: 1024px) {
		section {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.item {
		background-color: rgba(255, 255, 255, 0.8);
		min-height: 250px;
		/* opacity: 1; */
		opacity: 0;
		animation: fadeIn 0.6s ease 1 forwards;
		display: grid;
		grid-template-rows: 2fr 1fr;
		position: relative;
		text-align: center;
		transform: scale(0.95);
		transition: all 0.2s ease;
		text-decoration: none;
	}

	.item:hover {
		box-shadow: 0 0 15px gray;
		transform: scale(1);
	}

	.item__top-border {
		height: 30px;
		position: absolute;
		bottom: 0;
		width: 100%;
		color: white;
		line-height: 2;
	}

	:global(.item__image-link) {
		max-width: 100%;
	}

	.hideAnimation .item {
		animation: none;
		opacity: 1;
	}
	@media (prefers-reduced-motion) {
		.item {
			animation: none;
			opacity: 1;
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
