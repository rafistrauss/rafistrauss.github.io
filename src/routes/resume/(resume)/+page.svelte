<script>
	import Resume from '$lib/Resume/index.svelte';
	/** @type {Resume} */
	import tempData from '$lib/Resume/resume.json';

	const resumeInfo = tempData;
	const dateFormat = {
		month: 'short',
		year: 'numeric'
	};
</script>

<style>
	p {
		text-align: center;
	}

	a {
		color: var(--secondary-accent-color)
	}

	@media print {
		p {
			display: none;
		}
	}
</style>

<svelte:head>
	<title>Rafi Strauss Portfolio: Resume</title>
</svelte:head>

<p>Like this resume template? Go to <a href="/resume/generator">the generator</a> to make your own from your jsonresume document</p>

<Resume {resumeInfo} {dateFormat} />
