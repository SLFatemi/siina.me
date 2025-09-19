import { useEffect, useState } from "react";
import styles from "./Header.module.scss";

export default function Header({ children }) {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 10);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header
			className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
		>
			{children}
		</header>
	);
}
