import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: {
		default:
			'Simon Abiodun Aina — Automotive Operations & Software Systems Architect',
		template: '%s | Simon Abiodun Aina',
	},

	description:
		'Automobile operations veteran and full-stack systems developer specializing in automotive retail platforms, service scheduling, inventory systems, and dealership operations software.',

	keywords: [
		'Automotive Operations',
		'Automotive Software',
		'Dealership Management Systems',
		'Service Scheduling Software',
		'Inventory Management Systems',
		'Full Stack Developer',
		'Automotive SaaS',
		'Retail Operations',
	],

	authors: [{ name: 'Simon Abiodun Aina' }],
	creator: 'Simon Abiodun Aina',

	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-image-preview': 'large',
			'max-snippet': -1,
			'max-video-preview': -1,
		},
	},

	openGraph: {
		type: 'profile',
		locale: 'en_US',
		title: 'Simon Abiodun Aina — Automotive Operations & Software Architect',
		description:
			'Designing production-grade automotive platforms that power real dealerships and service operations.',
		url: 'https://your-domain.com',
		siteName: 'Simon Abiodun Aina',
		images: [
			{
				url: '/images/simon-profile.jpg',
				width: 1200,
				height: 630,
				alt: 'Simon Abiodun Aina',
			},
		],
	},

	twitter: {
		card: 'summary_large_image',
		title: 'Simon Abiodun Aina',
		description:
			'Automotive operations leader and full-stack software systems architect.',
		images: ['/images/simon-profile.jpg'],
	},
};
