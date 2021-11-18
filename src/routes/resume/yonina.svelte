<script>
	import Resume from '$lib/Resume/index.svelte';
	/** @type {Resume} */
	import tempData from '$lib/Resume/yonina-resume.json';

	const resumeInfo = tempData;
	const dateFormat = {
		month: 'short',
		year: 'numeric'
	};
</script>

<Resume {resumeInfo} {dateFormat} />
