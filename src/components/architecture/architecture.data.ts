export type ArchitecturePrinciple = {
	id: string;
	title: string;
	description: string;
	relatedProject?: string; // project id from projects.data.ts
	articleUrl?: string;
};

export const architecturePrinciples: ArchitecturePrinciple[] = [
	{
		id: 'scalable-saas',
		title: 'Scalable SaaS Thinking',
		description:
			'Designing applications that can grow with increasing users and operations without degrading performance.',
		relatedProject: 'autocare',
		articleUrl: '/articles/scalable-saas-thinking',
	},
	{
		id: 'workflow-driven',
		title: 'Workflow-Driven Design',
		description:
			'Modeling software around real operational workflows to minimize friction and maximize efficiency.',
		relatedProject: 'autocare2',
		articleUrl: '/articles/workflow-driven-design',
	},
	{
		id: 'automation',
		title: 'Operational Automation',
		description:
			'Automating repetitive business and system processes to reduce manual effort and errors.',
	},
	{
		id: 'data-driven',
		title: 'Data-Driven Decisions',
		description:
			'Building systems that provide actionable insights for operational and business decisions.',
	},
];
