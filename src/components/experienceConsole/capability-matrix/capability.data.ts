export type CapabilityGroup = {
	id: string;
	title: string;
	description: string;
	capabilities: string[];
};

export const capabilityGroups: CapabilityGroup[] = [
	{
		id: 'automotive',
		title: 'Automotive Operations',
		description:
			'End-to-end dealership, service, and vehicle lifecycle operations.',
		capabilities: [
			'Vehicle Importation & Compliance',
			'Dealership Operations',
			'Inventory Lifecycle Management',
			'Sales Negotiation Systems',
			'Service Operations',
		],
	},
	{
		id: 'software',
		title: 'Software Engineering',
		description: 'Designing production-grade systems with modern architecture.',
		capabilities: [
			'Full-Stack Development',
			'System Architecture',
			'Role-Based Access Control',
			'Database Modeling (Prisma)',
			'API & Integration Design',
		],
	},
	{
		id: 'product',
		title: 'Product & Systems Design',
		description: 'Building software around real operational workflows.',
		capabilities: [
			'Workflow Modeling',
			'Operational Automation',
			'Admin Panel Design',
			'Scalable SaaS Thinking',
		],
	},
	{
		id: 'business',
		title: 'Business & Strategy',
		description: 'Operational leadership grounded in real execution.',
		capabilities: [
			'Process Optimization',
			'Vendor & Partner Negotiation',
			'Operational Risk Management',
			'Decision Systems',
		],
	},
];
