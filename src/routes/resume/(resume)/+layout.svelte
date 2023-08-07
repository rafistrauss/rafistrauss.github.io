<main>
	<slot />
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	:global(li) {
		margin-bottom: .25em !important;
	}

	
	@media print {
		:global(body) {
			background: none !important;
		}

		:global(main) {
			padding: 0 !important;
			margin: 0 !important;
			widows: 100% !important;
		}
	}
</style>
