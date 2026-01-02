import { skills, SkillCategory } from './skills.data';

export function getSkillsByCategory() {
	return skills.reduce<Record<SkillCategory, string[]>>((acc, skill) => {
		if (!acc[skill.category]) {
			acc[skill.category] = [];
		}
		acc[skill.category].push(skill.name);
		return acc;
	}, {} as Record<SkillCategory, string[]>);
}
