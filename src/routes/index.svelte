<script context="module">
	export const prerender = true;
	import { items } from '$lib/projectData.js';

	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
</script>

<script>
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section style="display: grid; ">
	{#each items as item, idx}
		<a class="item" style="animation-delay: {idx * 0.2}s;" href="/projects/{item.slug}">
			<div class="item__top-border" style="background-color: {item.color}; color: {item.textColor}">
				{item.name}
			</div>
			<img class="item__image-link" src="/projectImages/{item.imageLink}" alt="" />
			<!-- <span >{item.name}</span> -->
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

	.item__image-link {
		max-width: 100%;
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
