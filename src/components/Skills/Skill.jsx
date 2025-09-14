import styles from "./Skills.module.scss";

function Skill({ name, svg: Icon, isLight }) {
	return (
		<div className={`${styles.skill} ${isLight ? "light" : "dark"}`}>
			<Icon size={64} className={styles.skillIcon} />
			<div className={styles.skillName}>{name}</div>
		</div>
	);
}

export default Skill;
