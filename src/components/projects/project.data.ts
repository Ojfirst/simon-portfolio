// src/components/projects/projects.data.ts
export type Project = {
	id: string;
	name: string;
	category: 'Automotive' | 'Platform' | 'System';
	summary: string;
	highlights: string[];
	stack: string[];
	liveUrl?: string;
	githubUrl?: string;
};

export const projects: Project[] = [
	{
		id: 'autocare',
		name: 'Autocare Service Scheduler',
		category: 'Automotive',
		summary:
			'Enterprise-grade service scheduling and operations platform for automotive dealerships.',
		highlights: [
			'Role-based access control',
			'Automated service approvals',
			'Real-time appointment orchestration',
		],
		stack: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind'],
		liveUrl: '#',
		githubUrl: '#',
	},
	{
		id: 'autocare2',
		name: 'Autocare Service Scheduler',
		category: 'Automotive',
		summary:
			'Enterprise-grade service scheduling and operations platform for automotive dealerships.',
		highlights: [
			'Role-based access control',
			'Automated service approvals',
			'Real-time appointment orchestration',
		],
		stack: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind'],
		liveUrl: '#',
		githubUrl: '#',
	},
];

export function getProjectById(id: string): Project | undefined {
	return projects.find((project) => project.id === id);
}
