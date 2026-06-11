import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addPassthroughCopy('src/assets');
	eleventyConfig.addPassthroughCopy({ 'src/CNAME': 'CNAME' });

	return {
		dir: {
			input: 'src',
			output: '_site',
			includes: '_includes',
			data: '_data',
		},
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		templateFormats: ['md', 'njk', 'html'],
	};
}
