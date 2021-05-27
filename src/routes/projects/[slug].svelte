<script context="module">
	import { items } from '$lib/projectData.js';
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
	export async function load({ page, fetch, session, context }) {
		const projectData = items.find((project) => project.slug === page.params.slug);

		if (!projectData) {
			return {
				status: 404,
				error: new Error(`Could not load ${page.params.slug}`)
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

{#if projectData.projectLink}
	<h2 class="project-link">
		<a target="_blank" href={projectData.projectLink}>View this project live</a>
	</h2>
{/if}

<section class="details">
	<picture>
		<img class="project-image" src="/projectImages/{projectData.imageLink}" alt="" />
	</picture>

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

	.project-image {
		max-width: 100%;
		grid-area: image;
	}

	.project-description {
		grid-area: text;
	}
</style>
