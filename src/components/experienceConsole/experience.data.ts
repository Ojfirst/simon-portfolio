export type Experience = {
	id: string;
	role: string;
	organization: string;
	period: string;
	domain: string;
	summary: string;
	operations: string[];
	systems: string[];
};

export const experiences: Experience[] = [
	{
		id: 'auto-ops',
		role: 'Automobile Operations Manager',
		organization: 'Ojfirst Autos / Femayo Holding',
		period: '2000s – Present',
		domain: 'Automotive Operations',
		summary:
			'Led end-to-end vehicle importation, dealership operations, inventory control, and sales execution across international markets.',
		operations: [
			'Vehicle import & compliance workflows',
			'Dealership operations management',
			'Inventory lifecycle control',
			'Sales negotiation & vendor relations',
		],
		systems: [
			'Inventory Operations',
			'Import Logistics',
			'Retail Sales Systems',
		],
	},
	{
		id: 'software',
		role: 'Full-Stack Systems Developer',
		organization: 'Independent / Product-led',
		period: 'Recent',
		domain: 'Software Engineering',
		summary:
			'Designing and building modern automotive-focused software systems with production-grade architecture.',
		operations: [
			'Automotive service scheduling platforms',
			'Admin & role-based system design',
			'Operational data modeling',
			'System automation',
		],
		systems: [
			'Autocare Scheduler',
			'Dealership Management Systems',
			'SaaS Platforms',
		],
	},
];
