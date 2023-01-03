
<script>
    import Resume from '$lib/Resume/index.svelte';
    import {dateFormat, storageKey__ResumeData} from '$lib/Resume/constants';


    let resumeInfo = null;

    if (typeof sessionStorage !== "undefined") {
        const storedResumeData = sessionStorage.getItem(storageKey__ResumeData);
        try {
            resumeInfo = JSON.parse(storedResumeData);
        } catch (error) {
            
        }
    }



</script>

{#if resumeInfo}
<Resume {resumeInfo} {dateFormat} />
{/if}