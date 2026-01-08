export interface Resume {
	id: string;
	title: string;
	subTitle: string;
	organization: string;
	period: string;
	summary: string;
	highlights: string[];
	skills: string[]; // <-- added
	pdfUrl: string;
}

export const resumes: Resume[] = [
	{
		id: '1',
		title: 'Operations & Business Manager',
		subTitle: 'Key Leadership Role in Automotive Importation & Dealerships',
		organization: 'Ojfirst Autos / Femayo Holding',
		period: '2000 – Present',
		summary:
			'Overseeing international vehicle importation, dealership operations, and retail sales across multiple locations.',
		highlights: [
			'Managed multi-million-dollar automobile importation projects',
			'Streamlined dealership operations to improve efficiency by 30%',
			'Negotiated key supplier contracts to secure premium vehicles at optimal cost',
		],
		skills: [
			'Automobile Importation',
			'Dealership Operations',
			'Retail Management',
			'Supplier Negotiation',
			'Inventory Control',
		],
		pdfUrl: '/resumes/Ojfirst-Autos-Operations-Resume.pdf',
	},
	{
		id: '2',
		title: 'Full-Stack Developer / Software Systems Architect',
		subTitle: 'Professional Software Architect & Full-Stack Developer',
		organization: 'Self-Employed / Portfolio Projects',
		period: '2019 – Present',
		summary:
			'Designing and implementing full-stack applications for automotive operations, inventory, and service scheduling platforms.',
		highlights: [
			'Built production-grade SaaS platforms for dealership management',
			'Integrated modern front-end (React, Next.js, Tailwind) with backend services (Node.js, Firebase, Prisma, PostgreSQL)',
			'Automated workflows and reporting, reducing manual effort by 50%',
		],
		skills: [
			'React & Next.js',
			'TypeScript',
			'Tailwind CSS',
			'Node.js / Express',
			'Prisma & PostgreSQL',
			'Firebase Integration',
			'Operational Automation',
		],
		pdfUrl: '/resumes/Simon-Aina-Software-Resume.pdf',
	},
	{
		id: '3',
		title: 'Education',
		subTitle: 'Formal Education & Professional Certifications',
		organization: 'University / Certification Institution',
		period: '1995 – 2011',
		summary:
			'Formal education and certifications in business, operations management, and software development.',
		highlights: [
			"Bachelor's in Business Administration",
			'Professional certifications in Full-Stack Development and Automotive Operations',
		],
		skills: [
			'Business Administration',
			'Operations Management',
			'Software Development',
			'Full-Stack Development',
		],
		pdfUrl: '/resumes/Simon-Aina-Education-Resume.pdf',
	},
];
