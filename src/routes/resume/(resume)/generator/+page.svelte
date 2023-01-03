
<script>
    import { goto } from '$app/navigation';

	import Resume from '$lib/Resume/index.svelte';
    import {dateFormat, storageKey__ResumeData} from '$lib/Resume/constants.js';


	let jsonResumeInfo = '';

	/**
	 *
	 * @param {string} jsonResumeInfo
	 */
	function parseInputResumeData(jsonResumeInfo) {

        let res = null;

        try {
            res = JSON.parse(jsonResumeInfo);
        } catch (error) {
            return null
        }
        return res;

	}
	$: resumeInfo = parseInputResumeData(jsonResumeInfo);

    function generateResume() {
        sessionStorage.setItem(storageKey__ResumeData, jsonResumeInfo);
        goto('/resume/viewer')
    }

</script>

<style>
    #layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 1em;
    }

    p {
        font-size: large;
    }

    textarea {
        width: 100%;
    }

    a {
        color: var(--secondary-accent-color);
    }

    sub {
        text-align: center;
        margin-bottom: 1em;
    }
</style>


<svelte:head>
    <title>Resume Generator: Generate a pretty beautiful resume from jsonresume data</title>
</svelte:head>


<sub>Alpha version: expect bugs!</sub>

<div id="layout">

    <div>
        <p>Paste your <a href="https://jsonresume.org/">jsonresume</a> data here</p>
        <textarea bind:value={jsonResumeInfo} name="" id="" cols="30" rows="10" />
    </div>
    
    <aside>
        <button on:click={generateResume}>Generate Resume</button>
        <!-- <button>Reset</button> -->
        <p>Preview:</p>
        <Resume {resumeInfo} {dateFormat} />
    </aside>
    
</div>