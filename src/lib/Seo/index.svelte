<script>
	export let pageTitle,
		pageUrl,
		pageDescription,
		pageType = 'website';
</script>

<title>{pageTitle}</title>
<link rel="canonical" href={pageUrl} />
<meta name="description" content={pageDescription} />
<meta name="author" content="Rafi Strauss" />
<meta property="og:url" content={pageUrl} />
<meta property="og:title" content={pageTitle} />
<meta property="og:type" content={pageType} />
