import styles from './HeroStyles.module.css';
// import heroImg from '../../assets/Design uten navn.png';
import heroImg from '../../assets/arpit.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import gfgLight from '../../assets/gfg-light.svg';
import gfgDark from '../../assets/gfg-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import hashnodeDark from "../../assets/hashnode-dark.svg";
import hashnodeLight from "../../assets/hashnode-light.svg";
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const gfgIcon = theme === 'light' ? gfgLight : gfgDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const hashnodeIcon = theme === "light" ? hashnodeLight : hashnodeDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Harris
          <br />
          Johnsen
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://geeksforgeeks.org/" target="_blank">
            <img src={gfgIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://hashnode.com/" target="_blank">
            <img src={hashnodeIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
