import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Navigation = () => {
  let navRef = useRef(null);
  let scrollRef = useRef(null);

  const [target, setTarget] = useState(null);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollHeight(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.className =
        scrollHeight > 0
          ? `${styles.fixedNav} ${styles.navigationWrapper}`
          : styles.navigationWrapper;
    }
  }, [scrollHeight]);

  useEffect(() => {
    if (target) {
      const listItems = navRef.current.querySelectorAll("li");

      listItems.forEach((item) => {
        item.className = "";
      });

      target.className = styles.activeNavLink;
    }
  }, [target]);

  function handleActiveNavLink(e) {
    setTarget(e.target.parentElement);
  }

  return (
    <div
      ref={scrollRef}
      className={styles.navigationWrapper}
    >
      <img
        src='/images/logo.png'
        alt='Topic logo'
        className={styles.logo}
      />

      <nav ref={navRef}>
        <ul className={styles.navLinks}>
          <li
            onClick={handleActiveNavLink}
            className={styles.activeNavLink}
          >
            <a href='#'>HOME</a>
          </li>
          <li onClick={handleActiveNavLink}>
            <a href='#browse'>BROWSE TOPICS</a>
          </li>
          <li onClick={handleActiveNavLink}>
            <a href='#how'>HOW IT WORKS</a>
          </li>
          <li onClick={handleActiveNavLink}>
            <a href='#faqs'>FAQS</a>
          </li>
          <li onClick={handleActiveNavLink}>
            <a href='#contact'>CONTACT</a>
          </li>
          <li
            data-dropdown={true}
            className={styles.navDropdown}
          >
            PAGES
          </li>
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
