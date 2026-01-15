// src/components/projects/projects.data.ts
export type Project = {
	id: string;
	name: string;
	category:
		| 'Automotive CRM'
		| 'Platform'
		| 'System'
		| 'Marketing and Conversation Website';
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
		category: 'Automotive CRM',
		summary:
			'Enterprise-grade service scheduling and operations platform for automotive dealerships.',
		highlights: [
			'Role-based access control',
			'Automated service approvals',
			'Real-time appointment booking',
			'Services Listing',
			'Vehicle Management',
			'inventory management',
			'Admin panel',
			'User dashboard',
			'Email reminder',
		],
		stack: [
			'React',
			'Next.js 16+',
			'TypeScript',
			'Prisma ORM',
			'PostgreSQL',
			'ClerkAuth (User & Admin roles)',
			'Resend',
			'Sooner',
			'Tailwind-CSS',
		],
		liveUrl: 'https://automobile-service-schedular.vercel.app/',
		githubUrl: 'https://github.com/Ojfirst/Automobile_Service_Schedular',
	},
	{
		id: 'femayo',
		name: 'Femayo T&S',
		category: 'Marketing and Conversation Website',
		summary:
			'Femayo T&S, SA next-Generation Marketing and Conversation Website, featuring cutting-edge design with glassmorphism, holographic elements, and cyber-gradient accents.',
		highlights: [
			'Marketing and Conversation',
			'Realtime contact form',
			'Navigation banner',
			'cutting-edge design',
			'glassmorphism and holographic elements',
		],
		stack: ['React', 'Vite', 'React router', 'Email.Js', 'CSS module'],
		liveUrl: 'https://femayo.vercel.app/',
		githubUrl: 'https://github.com/Ojfirst/femayo/',
	},
	{
		id: 'Eventify',
		name: 'Eventify',
		category: 'Platform',
		summary:
			'This project is a React application built with Vite. It features authentication (login/signup) and event management, using Firebase Authentication for user accounts.',
		highlights: [
			'User authentication (signup & login)',
			'Event creation, editing, and listing',
			'User Profile with Editing features',
			'Newsletter signup',
			'User dashboard',
			'Error handling and navigation',
		],
		stack: ['React', 'React router', 'Firebase', 'Firebase auth', 'CSS module'],
		liveUrl: 'https://eventsapp-v9ox.vercel.app/',
		githubUrl: 'https://github.com/Ojfirst/eventsapp',
	},
	{
		id: 'Order-app',
		name: 'Food Order App',
		category: 'Platform',
		summary:
			'Food Order App, A simple React application for browsing meals and managing a shopping cart. Users can add meals to their cart, adjust quantities, and view the total price before checkout',
		highlights: ['Stock browsing', 'Shopping cart management'],
		stack: ['React', 'ViteS', 'Redux toolKit', 'CSS module'],
		liveUrl: 'https://food-order-app-seven-beta.vercel.app/',
		githubUrl: 'https://github.com/Ojfirst/Food-order-app',
	},
	{
		id: 'IQ',
		name: 'Native-IQ',
		category: 'Platform',
		summary:
			'A simple website search-engine-friendly where you can find every country details one at a time.',
		highlights: [
			'Country Identity and symbol',
			'Geography and location',
			'Demography and culture',
			'Time zone and administration',
		],
		stack: ['HTML', 'CSS', 'javaSript (FP)'],
		liveUrl: 'https://ojfirst.github.io/country.app/',
		githubUrl: 'https://github.com/Ojfirst/country.app',
	},
];

export function getProjectById(id: string): Project | undefined {
	return projects.find((project) => project.id === id);
}
