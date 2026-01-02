// src/lib/seo/getCapabilitySchema.ts
import { capabilityGroups } from '@/components/experienceConsole/capability-matrix/capability.data';

export function getCapabilitySchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'DefinedTermSet',
		'@id': 'https://yourdomain.com/#capability-matrix',
		name: 'Professional Capability Matrix',
		description:
			'A structured representation of operational, technical, and business capabilities applied across automotive systems and modern software platforms.',
		hasDefinedTerm: capabilityGroups.flatMap((group) =>
			group.capabilities.map((capability) => ({
				'@type': 'DefinedTerm',
				name: capability,
				description: group.description,
				inDefinedTermSet: {
					'@type': 'DefinedTermSet',
					name: group.title,
				},
			}))
		),
	};
}
