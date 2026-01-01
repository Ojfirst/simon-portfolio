'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
	const [theme, setTheme] = useState<Theme>(() => {
		if (typeof window === 'undefined') return 'light';
		const stored = localStorage.getItem('theme');
		if (stored === 'dark' || stored === 'light') return stored;
		return window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light';
	});

	useEffect(() => {
		// keep DOM and localStorage in sync whenever `theme` changes
		localStorage.setItem('theme', theme);
		document.documentElement.classList.toggle('dark', theme === 'dark');
	}, [theme]);

	const toggleTheme = () => {
		const next = theme === 'dark' ? 'light' : 'dark';
		setTheme(next);
	};

	return { theme, toggleTheme };
}
