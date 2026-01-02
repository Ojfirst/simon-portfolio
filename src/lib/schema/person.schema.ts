import { skills } from '@/components/skills/skills.data';

export const personSchema = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Simon Abiodun Aina',
	url: 'https://your-domain.com',
	image: 'https://your-domain.com/images/simon-profile.jpg',
	jobTitle: 'Automotive Operations & Software Systems Architect',
	description:
		'Automotive operations veteran and full-stack software systems architect building dealership, service scheduling, and inventory platforms.',
	sameAs: [
		'https://www.linkedin.com/in/your-linkedin',
		'https://github.com/your-github',
	],
	knowsAbout: skills.map((skill) => ({
		'@id': `https://yourdomain.com/#skill-${skill.id}`,
	})),
};
