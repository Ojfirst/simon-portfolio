export const calendarSchema = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Simon Abiodun Aina',
	url: 'https://yourdomain.com',

	potentialAction: {
		'@type': 'ScheduleAction',
		target: {
			'@type': 'EntryPoint',
			urlTemplate: 'https://cal.com/your-username/intro',
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
