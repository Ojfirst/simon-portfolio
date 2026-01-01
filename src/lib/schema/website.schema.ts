export const websiteSchema = {
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	name: 'Simon Abiodun Aina',
	url: 'https://your-domain.com',
	description:
		'Official portfolio of Simon Abiodun Aina — Automotive Operations & Software Systems Architect.',
	publisher: {
		'@type': 'Person',
		name: 'Simon Abiodun Aina',
	},
	potentialAction: {
		'@type': 'SearchAction',
		target: 'https://your-domain.com/search?q={search_term_string}',
		'query-input': 'required name=search_term_string',
	},
};
