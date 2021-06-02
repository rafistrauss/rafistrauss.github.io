import fs from 'fs';
import { items } from './src/lib/projectData.js';

const basePath = 'https://rafistrauss.com';

const mainUrls = ['/', '/resume'];

const projectUrls = items.map((item) => `/${item.slug}`);

const allUrls = [...mainUrls, ...projectUrls];

const sitemap = allUrls.map((url) => `${basePath}${url}`).join('\n');

fs.writeFile('static/sitemap.txt', sitemap, 'utf-8', (err) => {
	if (err) {
		console.error(err);
	}
});
