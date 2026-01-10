'use client';

import { useEffect, useState } from 'react';

const MOBILE_BREAKPOINT = 750;

const useMobile = (): boolean => {
	// Provide initial value based on current window width (if available)
	const getInitialIsMobile = (): boolean => {
		return typeof window !== 'undefined'
			? window.innerWidth < MOBILE_BREAKPOINT
			: false;
	};

	const [isMobile, setIsMobile] = useState<boolean>(getInitialIsMobile);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		};

		// Call it once immediately in case initial state was wrong (e.g. SSR)
		handleResize();

		window.addEventListener('resize', handleResize);

		// Correct cleanup: remove the listener
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return isMobile;
};

export { useMobile };
