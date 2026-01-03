import { architecturePrinciples } from '@/components/architecture/architecture.data';
import { projects } from '@/components/projects/project.data';

export function getArchitectureSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: 'Architecture & Systems Thinking Principles',
		itemListElement: architecturePrinciples.map((p, index) => {
			const project = projects.find((pr) => pr.id === p.relatedProject);

			return {
				'@type': 'ListItem',
				position: index + 1,
				item: {
					'@type': 'TechArticle',
					headline: p.title,
					description: p.description,
					author: {
						'@type': 'Person',
						name: 'Simon Abiodun Aina',
					},
					about: [
						'Software Architecture',
						'System Design',
						'Operational Systems',
					],
					mainEntityOfPage: p.articleUrl
						? {
								'@type': 'WebPage',
								'@id': `https://yourdomain.com${p.articleUrl}`,
						  }
						: undefined,

					mentions: project
						? {
								'@type': 'SoftwareApplication',
								name: project.name,
								applicationCategory: project.category,
								operatingSystem: 'Web',
						  }
						: undefined,
				},
			};
		}),
	};
}
