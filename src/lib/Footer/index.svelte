<script>
	import logo from './svelte-logo.svg';
</script>

<footer>
	Built with <a href="https://kit.svelte.dev/" title="Sveltekit" target="_blank" rel="noreferrer"
		><img src={logo} alt="Sveltekit" />
		Sveltekit
	</a>
</footer>

<style>
	footer {
		margin: auto;
		height: 30px;
		font-size: larger;
		text-align: center;
		padding: 30px 0;
	}

	a {
		text-decoration: none;
		color: #ff3e00;
	}

	img {
		vertical-align: middle;
		height: 1.5em;
	}
</style>
