import styles from "./PopularTopics.module.css";
import PopularTopicsCard from "../PopularTopicsCard/PopularTopicsCard";
import PopTopicsNav from "../PopTopicsNav/PopTopicsNav";

const PopularTopics = () => {
  return (
    <section className={styles.popularTopicsSection}>
      <h2 className={styles.popularHeading}>Popular Topics</h2>
      <PopularTopicsCard
        imgSrc='/images/topics/undraw_Remote_design_team_re_urdx.png'
        title='Web Design'
        icon={["mediumaquamarine", "14"]}
      />
      <PopularTopicsCard
        imgSrc='/images/topics/undraw_online_ad_re_ol62.png'
        title='Advertising'
        icon={["red", "30"]}
      />
      <PopularTopicsCard
        imgSrc='/images/topics/undraw_Podcast_audience_re_4i5q.png'
        title='Podcast'
        icon={["goldenrod", "20"]}
      />
      <PopTopicsNav />
    </section>
  );
};

export default PopularTopics;
