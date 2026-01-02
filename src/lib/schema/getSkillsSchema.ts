// src/lib/seo/getSkillsSchema.ts
import { skills } from '@/components/skills/skills.data';

export function getSkillsSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'DefinedTermSet',
		'@id': 'https://yourdomain.com/#skills',
		name: 'Professional Skills',
		description:
			'A global, structured set of professional skills spanning automotive operations, software engineering, product systems, and business strategy.',
		hasDefinedTerm: skills.map((skill) => ({
			'@type': 'DefinedTerm',
			'@id': `https://yourdomain.com/#skill-${skill.id}`,
			name: skill.name,
			inDefinedTermSet: skill.category,
		})),
	};
}
