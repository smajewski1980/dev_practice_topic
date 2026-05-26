import styles from "./TrendingTopics.module.css";
import CardInfo from "../CardInfo/CardInfo";
import CardCTA from "../CardCTA/CardCTA";

const TrendingTopics = () => {
  const cardInfoText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sequi perspiciatis laborum eum.";

  return (
    <section className={styles.trendingTopics}>
      <div className={styles.cardWrapper}>
        <h2>Trending Topics</h2>
        <CardInfo
          title={"Investment"}
          icon={{ color: "#00B3F4", number: "30" }}
          text={cardInfoText}
          img={"/images/topics/undraw_Finance_re_gnv2.png"}
          maxWidth={"500px"}
        />
        <CardCTA
          img={true}
          icon={{ color: "#0039f4", number: "25" }}
        />
      </div>
    </section>
  );
};

export default TrendingTopics;
