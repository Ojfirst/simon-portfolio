import { Resume } from '@/components/resume-console/resume.data';

export const getResumeSchema = (resume: Resume) => ({
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Simon Abiodun Aina',
	url: 'https://simon-portfolio-ten.vercel.app/',
	image: 'https://simon-portfolio-ten.vercel.app/images/simon-profile.jpg',
	jobTitle: resume.title,
	worksFor: [
		{
			'@type': 'Organization',
			name: resume.organization,
		},
	],
	sameAs: [
		'https://www.linkedin.com/in/simonaina/',
		'https://github.com/Ojfirst',
	],
	description: resume.summary,
	skills: resume.skills.map((skillName) => ({
		'@type': 'DefinedTerm',
		name: skillName,
	})),
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
