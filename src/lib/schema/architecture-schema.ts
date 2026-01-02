// src/lib/schema/architecture-schema.ts
import { architecturePrinciples } from '@/components/architecture/architecture.data';

export function getArchitectureSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: 'Architecture & Systems Thinking Principles',
		itemListElement: architecturePrinciples.map((p, i) => ({
			'@type': 'TechArticle',
			position: i + 1,
			headline: p.title,
			url: p.articleUrl || '',
			description: p.description,
			author: {
				'@type': 'Person',
				name: 'Simon Abiodun Aina',
				url: 'https://www.linkedin.com/in/simonaina/',
			},
			about: p.relatedProject
				? {
						'@type': 'SoftwareApplication',
						name: p.relatedProject,
				  }
				: undefined,
		})),
	};
}
