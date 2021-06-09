import fs from 'fs';
import { items } from './src/lib/projectData.js';

/**
 * @param  {string} url
 * @param  {string} lastModified
 */
const urlTemplate = (url, lastModified) => `<url>
 <loc>${url}</loc>
 <lastmod>${lastModified}</lastmod>
 </url>`;

/**
 * @param  {string} sitemapEntries
 */
const sitemapDocTemplate = (sitemapEntries) => `<?xml version="1.0" encoding="UTF-8"?>
 <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	 ${sitemapEntries}
 </urlset>`;

const lastModifiedDate = new Date().toISOString().split('T')[0];

const basePath = 'https://rafistrauss.com';

const mainUrls = ['/', '/resume/'];

const projectUrls = items.map((item) => `/projects/${item.slug}`);

const allUrls = [...mainUrls, ...projectUrls];

const sitemapUrls = allUrls
	.map((url) => `${basePath}${url}`)
	.map((url) => urlTemplate(url, lastModifiedDate))
	.join('\n');

const fullSitemap = sitemapDocTemplate(sitemapUrls);

fs.writeFile('static/sitemap.xml', fullSitemap, 'utf-8', (err) => {
	if (err) {
		console.error(err);
	}
});
