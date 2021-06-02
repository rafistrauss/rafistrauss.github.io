<script>
	import { page } from '$app/stores';

	import IconLink from '$lib/IconLink/index.svelte';
	// import { document } from '$lib/Resume/document';
	import github from 'simple-icons/icons/github.js';
	import stackoverflow from 'simple-icons/icons/stackoverflow.js';
	import linkedin from 'simple-icons/icons/linkedin.js';
	import gmail from 'simple-icons/icons/gmail.js';
</script>

<header>
	<nav>
		<ul>
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.path === '/resume'}>
				<a sveltekit:prefetch href="/resume">Resume</a>
			</li>
		</ul>
	</nav>

	<div class="contactLinks">
		<IconLink
			link="https://github.com/rafistrauss"
			svg={github.svg}
			label={github.title}
			color="#388bfd"
		/>
		<IconLink
			link="https://stackoverflow.com/users/1851509/general-twyckenham"
			svg={stackoverflow.svg}
			color="#{stackoverflow.hex}"
		/>
		<IconLink
			link="https://www.linkedin.com/in/rafi-strauss-84043143/"
			svg={linkedin.svg}
			color="#{linkedin.hex}"
		/>
		<!-- <IconLink link="/resume" svg={document.svg} color="#34d058" /> -->
		<IconLink link="mailto:rafi@rafistrauss.com" svg={gmail.svg} color="#{gmail.hex}" />
	</div>
</header>

<style>
	header {
		background-color: rgba(255, 255, 255, 0.7);
		display: grid;
		place-content: center;
		width: 100%;
		padding: 1em 0;
		gap: 0.5em;
		box-sizing: border-box;
	}

	@media screen and (min-width: 758px) {
		header {
			display: flex;
			justify-content: space-between;
			padding: 1em;
		}
	}

	.contactLinks {
		display: flex;
		flex-direction: row;
		gap: 2em;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 10%;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
