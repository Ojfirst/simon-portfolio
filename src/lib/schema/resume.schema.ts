// src/lib/schema/resume.schema.ts
export const resumeSchema = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Simon Abiodun Aina',
	url: 'https://www.linkedin.com/in/simonaina/',
	image: 'https://your-domain.com/images/simon-profile.jpg',
	jobTitle: 'Automotive Operations & Software Systems Architect',
	description:
		'Automotive operations veteran and full-stack software systems architect building dealership, service scheduling, and inventory platforms.',
	alumniOf: [
		{ '@type': 'EducationalOrganization', name: 'Your University/School' },
	],
	hasCredential: [
		{
			'@type': 'EducationalOccupationalCredential',
			name: 'Certification Name',
		},
	],
	worksFor: [{ '@type': 'Organization', name: 'Your Organization/Company' }],
	sameAs: [
		'https://www.linkedin.com/in/simonaina/',
		'https://github.com/simonaina',
	],
};
