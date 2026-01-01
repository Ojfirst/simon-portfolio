import { Resume } from '@/components/resume-console/resume.data';

export const getResumeSchema = (resume: Resume) => ({
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Simon Abiodun Aina',
	url: 'https://your-domain.com',
	image: 'https://your-domain.com/images/simon-profile.jpg',
	jobTitle: resume.title,
	worksFor: [
		{
			'@type': 'Organization',
			name: resume.organization,
		},
	],
	sameAs: [
		'https://www.linkedin.com/in/simonaina/',
		'https://github.com/simonaina',
	],
	description: resume.summary,
	skills: resume.skills,
	alumniOf: resume.subTitle.includes('Education')
		? {
				'@type': 'EducationalOrganization',
				name: resume.organization,
		  }
		: undefined,
	education: resume.subTitle.includes('Education')
		? resume.highlights
		: undefined,
});
