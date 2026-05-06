import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className={styles.navigationWrapper}>
      <img
        src='/images/logo.png'
        alt='Topic logo'
        className={styles.logo}
      />

      <nav>
        <ul className={styles.navLinks}>
          <li className={styles.activeNavLink}>
            <a href='#'>HOME</a>
          </li>
          <li>
            <a href='#'>BROWSE TOPICS</a>
          </li>
          <li>
            <a href='#'>HOW IT WORKS</a>
          </li>
          <li>
            <a href='#'>FAQS</a>
          </li>
          <li>
            <a href='#'>CONTACT</a>
          </li>
          <li className={styles.navDropdown}>PAGES</li>
        </ul>
      </nav>

      <div className={styles.profileIcon}>
        <img
          src='/images/user-icon.png'
          alt='user profile'
        />
      </div>
    </div>
  );
};

export default Navigation;
