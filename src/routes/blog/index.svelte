<script context="module">
	/* eslint-disable */
	import Tag from '$lib/Tag/index.svelte';

	const postFiles = import.meta.glob('./*.svx');

	let body = [];

	for (const path in postFiles) {
		body.push(postFiles[path]().then(({ metadata }) => metadata));
	}
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load() {
		const posts = await Promise.all(body);
		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
	// eslint-disable-next-line
	export let posts;
</script>

<svelte:head>
	<title>A Blog By Any Other Name</title>
</svelte:head>

<h1>A Blog By Any Other Name</h1>

<ul class="list-none">
	{#each posts as { title, tags, outline, slug, published_at }}
		<li class="list-none">
			<a class="text-blue-500 space-y-3" rel="prefetch" href="/blog/{slug}">
				<h2>
					{title}
				</h2>

				<p class="text-white text-base">
					{outline}
				</p>

				<p class="text-sm font-normal text-gray-500">
					Tags:
					<span class="tags">
						{#each tags as tag}
							<Tag {tag} />
						{/each}
					</span>
				</p>
				<p class="date">
					{published_at}
				</p>
			</a>
		</li>
	{/each}
</ul>

<style>
	.list-none {
		list-style: none;
	}

	.tags {
		display: inline-flex;
		gap: 0.5em;
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
			Geneva, Verdana, sans-serif;
		font-size: 0.8em;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	li {
		position: relative;
	}

	a {
		background-color: var(--tertiary-color);
		padding: 0.3em 0.5em;
		border-radius: 15px;
		transform: translate(2px, 2px);
		transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in;
		display: block;
		box-shadow: 1px 1px 3px #888;
	}

	a:hover {
		text-decoration: none;
		box-shadow: 5px 5px 3px #888;
		transform: translate(0);
	}

	h2 {
		font-weight: bolder;
	}

	.date {
		font-style: italic;
	}
</style>
