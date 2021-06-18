<script>
	export let svg;
	export let link;
	export let title = null;
	export let newTab = true;
	export let label = 'none';
	export let color = 'orange';
</script>

<a
	href={link}
	class="iconLink"
	{title}
	target={newTab ? '_blank' : null}
	rel={newTab ? 'noreferrer' : null}
	aria-label={label}
	style="--hover-color: {color}"
>
	{@html svg}
</a>

<style>
	.iconLink {
		width: 32px;
		transition: fill 0.3s ease;
		display: inline-grid;
		align-content: center;
	}

	.iconLink:hover {
		fill: var(--hover-color);
	}
</style>
