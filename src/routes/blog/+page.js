const postFiles = import.meta.glob('./**/*.svx');

let body = [];

for (const path in postFiles) {
	body.push(postFiles[path]().then(({ metadata }) => metadata));
}
/**
 * @type {import('@sveltejs/kit').PageLoad}
 */
export async function load() {
	const posts = await Promise.all(body);
	return {
		posts
	};
}
