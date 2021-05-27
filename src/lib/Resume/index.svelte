<script>
	import { resumeData } from './data';
</script>

<div id="drag" class="cv instaFade wrap">
	<div class="mainDetails">
		<div id="name">
			<h1 class="quickFade delayTwo">Rafi Strauss</h1>
			<h4 class="quickFade delayThree">Software Engineer</h4>
			<h4 class="quickFade delayThree">
				<a href="mailto:rafi@rafistrauss.com">rafi@rafistrauss.com</a>
			</h4>
		</div>
		<div class="clear" />
	</div>

	<div id="mainArea" class="quickFade delayFive">
		<section>
			<div class="sectionTitle"><h1>Work Experience</h1></div>

			<div class="sectionContent js-experience-section">
				{#each resumeData as experienceItem}
					<article class="experience">
						<h2>{experienceItem.title}</h2>
						<h3>{experienceItem.companyName}</h3>
						<p class="subDetails">
							{experienceItem.startDate} - {experienceItem.current
								? 'Present'
								: experienceItem.endDate}
						</p>
						<ul>
							{#each experienceItem.tasks as task}
								<li>
									{@html task.description}
								</li>
							{/each}
						</ul>
					</article>
				{/each}
			</div>

			<div class="clear" />
		</section>

		<section>
			<div class="sectionTitle"><h1>Key Skills</h1></div>

			<div class="sectionContent">
				<ul class="keySkills">
					<li>HTML5/CSS3/SASS</li>
					<li>Javascript</li>
					<li>git</li>
					<li>React</li>
					<li>Java</li>
					<li>Perl</li>
					<li>PHP</li>
					<li>SQL</li>
				</ul>
			</div>
			<div class="clear" />
		</section>

		<section id="Education">
			<div class="sectionTitle"><h1>Education</h1></div>

			<div class="sectionContent">
				<article>
					<h2>BA, Computer Science</h2>
					<p class="subDetails">Yeshiva University</p>
				</article>
			</div>
			<div class="clear" />
		</section>
	</div>
</div>
