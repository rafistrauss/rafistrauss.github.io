<svelte:head>
	<title>Dossier Privacy Policy</title>
	<meta name="description" content="How the personal Dossier application handles Google data." />
</svelte:head>

<article>
	<h1>Dossier Privacy Policy</h1>
	<p>
		Dossier is a private application that Rafi Strauss uses to track job applications and related
		correspondence. This policy describes how that personal instance handles Google user data.
	</p>

	<h2>Google authorization and Gmail access</h2>
	<p>
		Dossier uses Google OAuth to connect to a Google account. It accesses Gmail only after the
		account holder grants the relevant permissions. Dossier receives the connected email address
		and uses the permissions granted to it to read or send mail. A refresh token allows authorized
		inbox checks to run while the browser is closed.
	</p>
	<p>
		With Gmail read permission, Dossier can search the mailbox, check for new messages, and read
		message contents and metadata before deciding which messages to keep. It uses those messages
		to find and track correspondence related to job applications. With Gmail send permission,
		Dossier submits messages and replies to Gmail when the account holder sends them from the app.
		Google delivers the message, including any selected attachments, to the addressed recipients.
	</p>

	<h2>Optional processing</h2>
	<p>
		When an AI provider is configured, Dossier can send it message text, sender details, subjects,
		dates, and relevant application context to classify incoming mail or suggest application status
		changes. When asked to draft a reply, it can also send excerpts from earlier messages in the
		thread. This processing may take place on a local model or with an external service, depending
		on the configuration. Any external provider's handling and retention depend on its terms and
		settings.
	</p>
	<p>
		If Google Calendar access is granted and the relevant features are used, Dossier can check
		free and busy times to suggest interview slots, and create, read, update, or delete interview
		events. It can store calendar and event identifiers and update the interview time in the
		associated application record.
	</p>

	<h2>Storage and retention</h2>
	<p>
		Dossier stores the connected email address, granted permissions, inbox sync information, and
		an encrypted OAuth refresh token in the application's database. For messages it keeps, the
		database can hold sender and recipient details, subjects, dates, message and thread identifiers,
		message text, and any resulting classifications or reply drafts. Imported mail can remain in
		the database after the Google account is disconnected. Retention of imported
		mail and any backup copies depends on how the instance is maintained.
	</p>

	<h2>Revoking access and deleting stored data</h2>
	<p>
		Disconnecting in Dossier's Google settings removes the stored Google connection and attempts
		to revoke the grant at Google. The account holder can also revoke access directly from
		<a href="https://myaccount.google.com/permissions">Google Account permissions</a>. Revoking
		access leaves previously imported mail in Dossier. Deleting an application in Dossier removes
		the email records linked to that application from its database. Other imported mail and any
		backup copies require separate removal by the instance operator. These actions leave the
		original messages in Gmail.
	</p>

	<h2>Contact</h2>
	<p>
		For privacy questions or requests to remove data from this instance, email
		<a href="mailto:rafi@rafistrauss.com">rafi@rafistrauss.com</a>.
	</p>
</article>

<style>
	article {
		width: 100%;
		max-width: var(--column-width);
		margin: 0 auto;
	}

	h2 {
		font-size: 1.25rem;
		font-weight: 600;
		margin: 2rem 0 0.5rem;
	}
</style>
