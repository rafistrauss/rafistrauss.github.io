import { error } from '@sveltejs/kit';
import { items } from '$lib/projectData.js';

/**
 * @type {import('@sveltejs/kit').PageLoad}
 */
export async function load({ params }) {
	const projectData = items.find((project) => project.slug === params.slug);

	if (!projectData) {
		throw error(404, `Could not load ${params.slug}`);
	}

	return {
		projectData
	};
}

export const prerender = true;
