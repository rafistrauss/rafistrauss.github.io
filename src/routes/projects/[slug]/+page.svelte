<script>
	import Picture from '$lib/Picture/index.svelte';

	
	/** @type {import('./$types').PageData} */
	export let data;
	let { projectData } = data;
	$: ({projectData} = data);
	/** @type {Project} */


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
