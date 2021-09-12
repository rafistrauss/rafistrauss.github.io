import slug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const config = {
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: [slug, [rehypeAutolinkHeadings, { behavior: 'wrap', test: ['h3'] }]],
	layout: './src/lib/blog_layout.svelte'
};

export default config;
