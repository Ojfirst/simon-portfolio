// src/lib/schema/skills-schema.ts
import { getSkillsByCategory } from '@/components/skills/getSkillsByCategory';

export function skillsSchema() {
	const groupedSkills = getSkillsByCategory();
	const allSkills = Object.values(groupedSkills).flat();

	return {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Simon Abiodun Aina',
		description:
			'Full-Stack Systems Developer and Automotive Operations Leader',
		knowsAbout: allSkills, // central skills array
		url: 'https://www.linkedin.com/in/simonaina/',
	};
}
