import styles from "./WebDesHero.module.css";
import { Link } from "react-router-dom";

const WebDesHero = () => {
  return (
    <section className={styles.webDesHero}>
      <div className={styles.contentWrapper}>
        <div className={styles.webDesHeroLeftCol}>
          <p className={styles.breadcrumbs}>
            <Link to={"/"}>Homepage</Link> / Web Design
          </p>

          <h1>Introduction to Web Design 101</h1>

          <div className={styles.cta}>
            <button>Read More</button>

            <img
              src='/images/bookmark-icon-white.png'
              alt='bookmark'
            />
          </div>
        </div>

        <div className={styles.webDesHeroRightCol}>
          <img
            src='/images/topics/undraw_Remote_design_team_re_urdx.png'
            alt=''
          />
        </div>
      </div>
    </section>
  );
};

export default WebDesHero;
