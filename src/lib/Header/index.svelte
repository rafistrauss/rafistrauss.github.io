<script>
	import { page } from '$app/stores';

	import IconLink from '$lib/IconLink/index.svelte';
	import {siGithub, siStackoverflow, siLinkedin, siGmail } from 'simple-icons/icons';
</script>

<header>
	<nav>
		<ul>
			<li class:active={$page.path === '/'}>
				<a sveltekit:prefetch title="Home" href="/">Home</a>
			</li>
			<li class:active={$page.path.startsWith('/resume')}>
				<a sveltekit:prefetch title="Resume" href="/resume/">Resume</a>
			</li>
			<li class:active={$page.path.startsWith('/blog')}>
				<a sveltekit:prefetch title="Blog" href="/blog/">Blog</a>
			</li>
		</ul>
	</nav>

	<div class="contactLinks">
		<IconLink
			link="https://github.com/rafistrauss"
			svg={siGithub.svg}
			title="Github Link"
			label={siGithub.title}
			color="#388bfd"
		/>
		<IconLink
			link="https://stackoverflow.com/users/1851509/general-twyckenham"
			title="StackOverflow Link"
			svg={siStackoverflow.svg}
			color="#{siStackoverflow.hex}"
		/>
		<IconLink
			title="LinkedIn Link"
			link="https://www.linkedin.com/in/rafi-strauss-84043143/"
			svg={siLinkedin.svg}
			color="#{siLinkedin.hex}"
		/>
		<IconLink
			link="mailto:rafi@rafistrauss.com"
			title="Email link"
			svg={siGmail.svg}
			color="#{siGmail.hex}"
		/>
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
