export const calendarSchema = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Simon Abiodun Aina',
	url: 'https://simon-portfolio-ten.vercel.app/',

	potentialAction: {
		'@type': 'ScheduleAction',
		target: {
			'@type': 'EntryPoint',
			urlTemplate: 'https://cal.com/omojos/30min',
			actionPlatform: [
				'https://schema.org/DesktopWebPlatform',
				'https://schema.org/MobileWebPlatform',
			],
		},
		result: {
			'@type': 'Event',
			name: 'Introductory Call',
		},
	},
};
