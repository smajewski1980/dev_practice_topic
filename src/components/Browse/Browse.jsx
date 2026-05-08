import styles from "./Browse.module.css";
import CardInfo from "../CardInfo/CardInfo";
import CardCTA from "../CardCTA/CardCTA";
import { useState } from "react";
import Design from "../Design/Design";
import Marketing from "../Marketing/Marketing";
import Finance from "../Finance/Finance";
import Music from "../Music/Music";
import Education from "../Education/Education";

const Browse = () => {
  const [activeTab, setActiveTab] = useState("Design");

  const componentMap = {
    Design: Design,
    Marketing: Marketing,
    Finance: Finance,
    Music: Music,
    Education: Education,
  };

  function handleTabClick(e) {
    document.startViewTransition(() => {
      setActiveTab(e.target.textContent);
    });
  }

  const SelectedComponent = componentMap[activeTab];

  return (
    <section
      id='browse'
      className={styles.sectionBrowse}
    >
      <h2>Browse Topics</h2>

      <ul className={styles.browseTabList}>
        <li
          className={activeTab === "Design" ? styles.activeTab : ""}
          onClick={handleTabClick}
        >
          Design
        </li>
        <li
          className={activeTab === "Marketing" ? styles.activeTab : ""}
          onClick={handleTabClick}
        >
          Marketing
        </li>
        <li
          className={activeTab === "Finance" ? styles.activeTab : ""}
          onClick={handleTabClick}
        >
          Finance
        </li>
        <li
          className={activeTab === "Music" ? styles.activeTab : ""}
          onClick={handleTabClick}
        >
          Music
        </li>
        <li
          className={activeTab === "Education" ? styles.activeTab : ""}
          onClick={handleTabClick}
        >
          Education
        </li>
      </ul>

      {SelectedComponent && <SelectedComponent />}
    </section>
  );
};

export default Browse;
