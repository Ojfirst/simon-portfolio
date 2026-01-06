import { skills } from '@/components/skills/skills.data';

export const personSchema = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Simon Abiodun Aina',
	url: 'https://simon-portfolio-ten.vercel.app/',
	image: 'https://simon-portfolio-ten.vercel.app/images/simon-profile.jpg',
	jobTitle: 'Automotive Operations & Software Systems Architect',
	description:
		'Automotive operations veteran and full-stack software systems architect building dealership, service scheduling, and inventory platforms.',
	sameAs: [
		'https://www.linkedin.com/in/simonaina/',
		'https://github.com/Ojfirst',
	],
	knowsAbout: skills.map((skill) => ({
		'@id': `https://simon-portfolio-ten.vercel.app/#skill-${skill.id}`,
	})),
};
