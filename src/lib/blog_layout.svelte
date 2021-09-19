<script context="module">	
</script>

<script>
	export let title, outline, slug, image;
	import './blog.scss';

	const jsonLd = {"@context": "https://schema.org",
      "@type": "NewsArticle",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://google.com/article"
      },
      "headline": title,
      "image": [
        "https://example.com/photos/1x1/photo.jpg",
        "https://example.com/photos/4x3/photo.jpg",
        "https://example.com/photos/16x9/photo.jpg"
      ],
      "datePublished": "2015-02-05T08:00:00+08:00",
      "dateModified": "2015-02-05T09:20:00+08:00",
      "author": {
        "@type": "Person",
        "name": "Rafi Strauss",
        "url": "https://rafistrauss.com/"
      }
    }

	const pageUrl = `https://rafistrauss.com/blog/${slug}`

	const pageTitle = title;
	const pageDescription = outline;
	const pageType = 'article';

</script>

<svelte:head>

	<title>{pageTitle}</title>
	<link rel="canonical" href={pageUrl} />
	<meta name="description" content={pageDescription} />
	<meta name="author" content="Rafi Strauss" />
	<meta property="og:url" content={pageUrl} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:type" content={pageType} />
	<meta property="og:image" content={image}>

	{@html '<script type="application/ld+json">'+ JSON.stringify(jsonLd) + '</script>'}
</svelte:head>

<article class="blog-post">
	<slot />
</article>

<style>
</style>
