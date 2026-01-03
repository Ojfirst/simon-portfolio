import { projects } from '@/components/projects/project.data';

export const getProjectById = (id?: string) =>
	projects.find((p) => p.id === id) || null;
