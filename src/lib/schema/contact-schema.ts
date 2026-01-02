// src/lib/schema/contact-schema.ts
import { contactInfo } from '@/components/contact/contact.data';

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
	})),
	sameAs: contactInfo.linkedProfiles,
};
