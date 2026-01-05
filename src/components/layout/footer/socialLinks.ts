import { Github, Linkedin, Mail, ArrowUpRight, Twitter } from 'lucide-react';
import { contactInfo } from '@/components/contact/contact.data';

export const socialLinks = [
	{
		label: 'LinkedIn',
		href: contactInfo.linkedProfiles.find((url) => url.includes('linkedin')),
		icon: Linkedin,
		hover:
			'hover:border-sky-500/50 hover:shadow-[0_0_30px_-12px_rgba(56,189,248,0.8)]',
	},
	{
		label: 'GitHub',
		href: contactInfo.linkedProfiles.find((url) => url.includes('github')),
		icon: Github,
		hover:
			'hover:border-indigo-500/50 hover:shadow-[0_0_30px_-12px_rgba(99,102,241,0.8)]',
	},
	{
		label: 'X',
		href: contactInfo.linkedProfiles.find((url) => url.includes('x.com')),
		icon: Twitter,
		hover:
			'hover:border-neutral-500/50 hover:shadow-[0_0_30px_-12px_rgba(255,255,255,0.3)]',
	},
];
