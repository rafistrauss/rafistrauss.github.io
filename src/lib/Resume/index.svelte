<script>
	/** @type {Resume} */
	export let resumeInfo;
	export let dateFormat;
	import gemIcon from '$lib/Resume/gem.svg';

	/**
	 *
	 * @param {string} datestamp Datestamp in YYYY-MM-DD format
	 */
	const getDateFromDatestamp = (datestamp) => {
		const [year, month, day] = datestamp.split('-').map(el => parseInt(el, 10));
		return new Date(year, month - 1, day);
	};
</script>

<div class="cv instaFade wrap">
	<div class="mainDetails">
		<div id="name">
			<h1 class="quickFade delayTwo">{resumeInfo?.basics?.name ?? ""}</h1>
			<h4 class="quickFade delayThree">{resumeInfo?.basics?.label ?? ""}</h4>
			<h4 class="quickFade delayThree">{resumeInfo?.basics?.location?.city ?? ""}</h4>
		</div>

		<div id="contactDetails" class="quickFade delayFour">
			<ul>
				<li><a href="mailto:{resumeInfo?.basics?.email ?? ""}">{resumeInfo?.basics?.email ?? ""}</a></li>
				<li><a href="tel:{resumeInfo?.basics?.phone ?? ""}">{resumeInfo?.basics?.phone ?? ""}</a></li>
			</ul>
		</div>
		<div class="clear" />
	</div>

	<div id="mainArea" class="quickFade delayFive">
		{#if resumeInfo?.work?.length}
			<section>
				<div class="sectionTitle"><h1>Work Experience</h1></div>

				<div class="sectionContent js-experience-section">
					<article class="experience">
						{#each resumeInfo.work as item}
							<div class="experience__item">
								<div>
									<h2>{item.position}</h2>
									<p class="subDetails">
										{getDateFromDatestamp(item.startDate).toLocaleString('default', dateFormat)} - {item.endDate
											? getDateFromDatestamp(item.endDate).toLocaleString('default', dateFormat)
											: 'Present'}
									</p>
								</div>
								<h3 class="companyName">{item.name}</h3>
								{#if item.highlights}
									<!-- content here -->
									<ul>
										{#each item.highlights as task}
											<li>{@html task}</li>
										{/each}
									</ul>
								{/if}
							</div>
						{/each}
					</article>
				</div>
				<div class="clear" />
			</section>
		{/if}
		{#if resumeInfo?.awards?.length}
			<section>
				<div class="sectionTitle"><h1>Awards</h1></div>
				<div class="sectionContent">
					<article class="awards">
						{#each resumeInfo.awards as award}
							<div class="experience__item">
								<div>
									<h2>
										<img
											src={gemIcon}
											style="height: 0.85em; margin-right: 4px;"
											alt=""
										/>{award.title}
									</h2>
									<p class="subDetails">
										{new Date(award.date).toLocaleString('default', {
											month: 'long',
											year: 'numeric'
										})}
									</p>
								</div>
								<h3 class="companyName">{award.awarder}</h3>
								<p>
									{award.summary}
								</p>
							</div>
						{/each}
					</article>
				</div>
				<div class="clear" />
			</section>
		{/if}

		{#if resumeInfo?.skills?.length}
			<section>
				<div class="sectionTitle"><h1>Key Skills</h1></div>

				<div class="sectionContent">
					<ul class="keySkills">
						{#each resumeInfo.skills as skill}
							<li>{skill.name}</li>
						{/each}
					</ul>
				</div>
				<div class="clear" />
			</section>
		{/if}

		{#if resumeInfo?.education?.length}
			 <section id="Education">
				 <div class="sectionTitle"><h1>Education</h1></div>
	 
				 <div class="sectionContent">
					 {#each resumeInfo.education as education}
						  <article>
							  <h2>{education.studyType}, {education.area}</h2>
							  <p class="subDetails">{education.institution}</p>
						  </article>
					 {/each}
				 </div>
				 <div class="clear" />
			 </section>
		{/if}

	</div>
</div>

<!-- markup (zero or more items) goes here -->
<style>
	@media print {
		:global(header, footer) {
			display: none !important;
		}
	}

	div,
	h1,
	h2,
	h3,
	h4,
	p,
	ul,
	li,
	article,
	section {
		border: 0;
		font: inherit;
		font-size: 100%;
		margin: 0;
		padding: 0;
		vertical-align: baseline;
	}

	li {
		list-style-type: square;
	}

	article,
	section {
		display: block;
	}

	/* We need to minimize the use of code, so we will be using roots...this is in the works */
	:root {
		--highlight: #a29400;
		--header-font: 'Gudea', Helvetica, Arial, sans-serif;
		--content-font: 'Lato', Helvetica, Arial, sans-serif;
	}

	.clear {
		clear: both;
	}

	.companyName {
		margin-bottom: 0.5em;
	}

	.experience__item {
		margin-top: 1em;
	}

	.experience__item > div {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
	}

	@media all and (min-width: 600px) {
		.experience__item > div {
			flex-direction: row;
		}
	}

	.experience__item:first-child {
		margin-top: 0;
	}

	p {
		font-size: 1em;
		line-height: 1.4em;
		margin-bottom: 20px;
		color: #444;
	}

	a {
		color: var(--accent-color);
	}

	.cv {
		width: 100%;
		max-width: 54rem;
		background: #fff;
		margin: 30px auto;
		font-family: 'Lato', Helvetica, Arial, sans-serif;
		font-feature-settings: 'calt', 'liga', 'hist', 'onum', 'pnum';
		font-size: 1rem;
		color: #222;
	}

	.mainDetails {
		padding: 25px 35px;
		border-bottom: 2px solid var(--accent-color);
		background: #f3f3f3;
	}

	@media print {
		.mainDetails {
			padding: 25px;
		}

		.cv {
			max-width: none;
			margin: 0;
		}

		@page {
			margin: 0;
		}
	}

	#name h1 {
		font-size: 2.5em;
		font-family: 'Gudea', Helvetica, arial, sans-serif;
	}

	#mainArea {
		padding: 0 40px;
	}

	.wrap {
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
		transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	}
	.wrap:hover {
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	}
	@media print {
		.wrap {
			box-shadow: none !important;
			transition: none;
		}
	}

	#name {
		float: left;
	}

	#contactDetails {
		float: right;
	}
	#contactDetails ul {
		font-size: 0.9em;
		margin-top: 2px;
	}
	#contactDetails ul li {
		margin-bottom: 3px;
		list-style-type: none;
		color: #444;
	}

	.experience {
		page-break-inside: avoid;
	}
	.experience:not(:first-child) {
		margin-top: 1em;
	}

	.experience:last-child {
		margin-bottom: 1em;
	}

	section {
		border-top: 1px solid #dedede;
		padding: 10px 0 0;
		page-break-inside: avoid;
	}

	@media all and (min-width: 768px) {
		section {
			border-top: 1px solid #dedede;
			padding-top: 20px;
		}
	}

	section:first-child {
		border-top: 0;
	}

	section:last-child {
		padding: 20px 0 10px;
	}

	.sectionTitle {
		float: left;
		width: 20%;
	}

	.sectionContent {
		float: right;
		width: 76%;
	}

	.sectionTitle h1 {
		font-family: 'Gudea', helvetica, arial, sans-serif;
		font-size: 0.89em;
		color: var(--accent-color);
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.sectionContent h2 {
		font-family: 'Gudea', helvetica, arial, sans-serif;
		font-size: 1.5em;
	}

	.subDetails {
		font-size: 85%;
		margin-bottom: 3px;
		align-self: flex-end;
	}

	.keySkills {
		list-style-type: none;
		column-count: 3;
		margin-bottom: 20px;
		font-size: 1em;
		color: #444;
	}

	.keySkills ul li {
		margin-bottom: 3px;
	}

	@media all and (min-width: 602px) and (max-width: 800px) {
		.keySkills {
			column-count: 2;
		}
	}
	@media all and (max-width: 54rem) {
		.cv {
			width: 95%;
			margin: 10px auto;
			min-width: 280px;
			transition: all 0.25s linear;
		}

		#name,
		#contactDetails {
			float: none;
			width: 100%;
			text-align: center;
		}

		.sectionTitle,
		.sectionContent {
			float: none;
			width: 100%;
		}

		.sectionTitle {
			margin-left: -2px;
			font-size: 1.25em;
		}

		.keySkills {
			column-count: 3;
		}
	}
	@media all and (max-width: 480px) {
		.mainDetails {
			padding: 15px 15px;
		}

		section {
			padding: 15px 0 0;
		}

		#mainArea {
			padding: 0 25px;
		}

		.keySkills {
			column-count: 1;
		}

		#name h1 {
			line-height: 0.8em;
			margin-bottom: 4px;
		}
	}
	@media print {
		.cv {
			width: 100%;
			margin: 0;
		}
	}
	@keyframes reset {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}
	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		40% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
