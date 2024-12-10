import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Next.js" />
        <SkillList src={checkMarkIcon} skill="React.js" />
        <SkillList src={checkMarkIcon} skill="TailWind CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="MongoDB" />
        <SkillList src={checkMarkIcon} skill="Postgres" />
        <SkillList src={checkMarkIcon} skill="Express.js" />
        <SkillList src={checkMarkIcon} skill="Node.js" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="FastAPI" />
        <SkillList src={checkMarkIcon} skill="Scikit-learn" />
        <SkillList src={checkMarkIcon} skill="Machine Learning" />
        <SkillList src={checkMarkIcon} skill="Knowledge Graph" />
        <SkillList src={checkMarkIcon} skill="GenAI" />
        <SkillList src={checkMarkIcon} skill="neo4j" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JAVA" />
        <SkillList src={checkMarkIcon} skill="C" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
      </div>
    </section>
  );
}

export default Skills;
