import styles from "./NavBtns.module.scss";

function NavBtns({ children }) {
	return <div className={styles.navBtns}>{children}</div>;
}

export default NavBtns;
