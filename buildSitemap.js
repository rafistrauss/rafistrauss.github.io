import fs from 'fs';
import { items } from './src/lib/projectData.js';

import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

const deepReadDir = async (dirPath) =>
	await Promise.all(
		(
			await readdir(dirPath, { withFileTypes: true })
		).map(async (dirent) => {
			const path = join(dirPath, dirent.name);
			return dirent.isDirectory() ? await deepReadDir(path) : path;
		})
	);

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

const mainUrls = ['/', '/resume', '/blog'];

const projectUrls = items.map((item) => `/projects/${item.slug}`);

const blogFiles = await deepReadDir('src/routes/blog');
const blogUrls = blogFiles
	.flat(Number.POSITIVE_INFINITY)
	.filter((fileName) => fileName.endsWith('.svx'))
	.map((fileName) => `/blog/${fileName.replace('/+page.svx', '').replace('src/routes/blog/', '')}`);

const allUrls = [...mainUrls, ...projectUrls, ...blogUrls];

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
