import { Divider } from "@mui/material";
import styles from "./Divider.module.scss";
import { useEffect, useRef, useState } from "react";

type CustomDividerProps = {
	title?: string;
	link?: string;
};

export const CustomDivider = ({ title, link }: CustomDividerProps) => {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {                    
                    setIsVisible(true);
                } else {
					setIsVisible(false);
				}
            }, { threshold: 0 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
	}, []);

	return (
		<div className={styles["divider-block"] } ref={ref} id={link}>
			<Divider className={styles.divider  + (isVisible ? ` ${styles.left}` : "")}>
				<span className={styles.divider_title}>{title}</span>
			</Divider>
		</div>
	);
};
