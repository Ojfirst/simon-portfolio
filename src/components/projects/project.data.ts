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
			'Email reminder',
		],
		stack: [
			'Next.js',
			'TypeScript',
			'Prisma',
			'PostgreSQL',
			'Tailwind',
			'Resend',
			'Sooner',
		],
		liveUrl:
			'https://automobile-service-schedular-y25f-git-ff2a3f-ojfirsts-projects.vercel.app/',
		githubUrl: 'https://github.com/Ojfirst/Automobile_Service_Schedular',
	},
	{
		id: 'femayo',
		name: 'Femayo',
		category: 'Automotive',
		summary:
			'Enterprise-grade service scheduling and operations platform for automotive dealerships.',
		highlights: [
			'Role-based access control',
			'Automated service approvals',
			'Real-time appointment orchestration',
		],
		stack: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind'],
		liveUrl: 'https://femayo.vercel.app/',
		githubUrl: '#',
	},
];

export function getProjectById(id: string): Project | undefined {
	return projects.find((project) => project.id === id);
}
