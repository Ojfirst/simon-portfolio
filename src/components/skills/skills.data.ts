export type SkillCategory =
	| 'Automotive Operations'
	| 'Software Engineering'
	| 'Product & Systems'
	| 'Business & Strategy';

export type Skill = {
	id: string;
	name: string;
	category: SkillCategory;
};

export const skills: Skill[] = [
	// Automotive Operations
	{
		id: 'vehicle-importation',
		name: 'Vehicle Importation & Compliance',
		category: 'Automotive Operations',
	},
	{
		id: 'dealership-ops',
		name: 'Dealership Operations',
		category: 'Automotive Operations',
	},
	{
		id: 'inventory-management',
		name: 'Inventory Lifecycle Management',
		category: 'Automotive Operations',
	},

	// Software Engineering
	{
		id: 'fullstack-dev',
		name: 'Full-Stack Development',
		category: 'Software Engineering',
	},
	{
		id: 'system-architecture',
		name: 'System Architecture',
		category: 'Software Engineering',
	},
	{
		id: 'rbac',
		name: 'Role-Based Access Control',
		category: 'Software Engineering',
	},
	{
		id: 'database-modeling',
		name: 'Database Modeling (Prisma)',
		category: 'Software Engineering',
	},

	// Product & Systems
	{
		id: 'workflow-modeling',
		name: 'Workflow Modeling',
		category: 'Product & Systems',
	},
	{
		id: 'operational-automation',
		name: 'Operational Automation',
		category: 'Product & Systems',
	},

	// Business & Strategy
	{
		id: 'process-optimization',
		name: 'Process Optimization',
		category: 'Business & Strategy',
	},
	{
		id: 'vendor-negotiation',
		name: 'Vendor & Partner Negotiation',
		category: 'Business & Strategy',
	},
];
