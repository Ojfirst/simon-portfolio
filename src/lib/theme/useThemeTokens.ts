'use client';

import { useTheme } from 'next-themes';

export function useThemeTokens() {
	const { theme } = useTheme();

	const isLight = theme === 'light';

	return {
		textColor: isLight ? 'text-neutral-900' : 'text-white',
		subTextColor: isLight ? 'text-neutral-700' : 'text-neutral-400',
		mutedText: isLight ? 'text-neutral-600' : 'text-neutral-500',

		badgeBg: isLight ? 'bg-white/60 text-gray-500' : 'bg-white/5',
		badgeBorder: isLight ? 'border-neutral-400/40' : 'border-neutral-700',

		panelBg: isLight
			? 'bg-white/70 border-neutral-300'
			: 'bg-neutral-950/70 border-neutral-800',

		iconPanel: isLight
			? 'bg-white/70 border-neutral-300 text-neutral-700'
			: 'bg-neutral-900/60 border-neutral-800 text-neutral-400',

		socialIcon: isLight ? 'bg-neutral-700' : 'bg-neutral-900/60',
	};
}
