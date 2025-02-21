import { useEffect, useState } from "react";
import "./BackgroundBanner.scss";

export const BackgroundBanner = () => {
	const [marginScroll, setMarginScroll] = useState(0);

	const handleScroll = () => {
		setMarginScroll(0/* window.scrollY */);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="background-banner">
			<div className="img banner-img__first" style={{marginLeft: marginScroll}}></div>
			<div className="img banner-img__second" style={{marginRight: marginScroll}}></div>
		</div>
	);
};
