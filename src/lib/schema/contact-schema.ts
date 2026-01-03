// src/lib/schema/contact-schema.ts
import { contactInfo } from '@/components/contact/contact.data';
import { availability } from '@/lib/availability';

export const contactSchema = {
	'@context': 'https://schema.org',
	'@type': 'Person',

	name: contactInfo.name,
	email: `mailto:${contactInfo.email}`,
	telephone: contactInfo.phone,
	url: contactInfo.website,

	contactPoint: contactInfo.channels.map((channel) => ({
		'@type': 'ContactPoint',
		contactType: channel,
		availableLanguage: 'English',
		areaServed: 'Global',
		email: `mailto:${contactInfo.email}`,
	})),

	sameAs: contactInfo.linkedProfiles,

	hasOccupation: {
		'@type': 'Occupation',
		occupationalCategory: 'Software Developer / Automotive Systems Specialist',
	},

	availability: availability.available
		? {
				'@type': 'Demand',
				availabilityStarts: availability.availabilityStarts,
				availabilityEnds: availability.availabilityEnds,
		  }
		: undefined,
};
