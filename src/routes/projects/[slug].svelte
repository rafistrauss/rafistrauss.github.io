<script context="module">
	import { items } from '$lib/projectData.js';
	import Picture from '$lib/Picture/index.svelte';
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ params }) {
		const projectData = items.find((project) => project.slug === params.slug);

		if (!projectData) {
			return {
				status: 404,
				error: new Error(`Could not load ${params.slug}`)
			};
		}

		return {
			props: {
				projectData
			}
		};
	}
</script>

<script>
	/** @type {Project} */
	export let projectData;
</script>

<!-- markup (zero or more items) goes here -->

<svelte:head>
	<title>{projectData.name}</title>
</svelte:head>

<h1>{projectData.name}</h1>

{#if projectData.projectLink || projectData.repoLink}
	<h2 class="project-link">
		{#if projectData.projectLink}
			<a class="project-link__link" target="_blank" rel="noreferrer" href={projectData.projectLink}
				>View this project live</a
			>
		{/if}
		{#if projectData.repoLink}
			<a class="project-link__link" target="_blank" rel="noreferrer" href={projectData.repoLink}
				>View the code for this project</a
			>
		{/if}
	</h2>
{/if}

<section class="details">
	<Picture imageSource={`/projectImages/${projectData.imageLink}`} className="project-image" />

	<p class="project-description">
		{@html projectData.description}
	</p>
</section>

<style>
	.details {
		display: grid;
		grid-auto-rows: 1fr;
		grid-template-areas:
			'image'
			'text';
	}

	@media all and (min-width: 768px) {
		.details {
			grid-auto-columns: 1fr;
			grid-template-areas: 'text image';
			gap: 1em;
		}
	}

	.project-link {
		text-align: center;
	}

	.project-link__link {
		display: block;
	}

	:global(.project-image) {
		max-width: 100%;
		grid-area: image;
	}

	.project-description {
		grid-area: text;
	}
</style>
