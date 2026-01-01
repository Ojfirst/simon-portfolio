import { useEffect, useState } from 'react';

type MobileBreakPointProps = {
	BreakPoint: number;
};

const MOBILE_BREAKPOINT: MobileBreakPointProps = 900;

const useMobile = () => {
	const [isMobile, setIsMobile] = useState(
		window.innerWidth < MOBILE_BREAKPOINT
	);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return isMobile;
};

export { useMobile };
