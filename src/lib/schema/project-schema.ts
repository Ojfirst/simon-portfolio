// src/lib/schema/project-schema.ts
import { Project } from '@/components/projects/project.data';

export function getProjectSchema(project: Project) {
	return {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: project.name,
		description: project.summary,
		applicationCategory: 'BusinessApplication',
		operatingSystem: 'Web',
		url: project.liveUrl || project.githubUrl || '',
		creator: {
			'@type': 'Person',
			name: 'Simon Abiodun Aina',
			worksFor: [
				{ '@type': 'Organization', name: 'Ojfirst Autos / Femayo Holding' },
			],
			sameAs: [
				'https://www.linkedin.com/in/simonaina/',
				'https://github.com/simonaina',
			],
		},
		technology: project.stack,
		offers: {
			'@type': 'Offer',
			price: '0',
			priceCurrency: 'USD',
		},
	};
}
