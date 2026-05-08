import styles from "./Music.module.css";
import CardInfo from "../CardInfo/CardInfo";

const Music = () => {
  const cardInfoText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nam.";
  return (
    <div className={styles.cardWrapper}>
      <CardInfo
        title={"Composing Song"}
        icon={{ color: "#F9A826", number: "45" }}
        text={cardInfoText}
        img={"/images/topics/undraw_Compose_music_re_wpiw.png"}
        maxWidth={"325px"}
      />
      <CardInfo
        title={"Online Music"}
        icon={{ color: "#F9A826", number: "45" }}
        text={cardInfoText}
        img={"/images/topics/undraw_happy_music_g6wc.png"}
        maxWidth={"325px"}
      />
      <CardInfo
        title={"Podcast"}
        icon={{ color: "#F9A826", number: "20" }}
        text={cardInfoText}
        img={"/images/topics/undraw_Podcast_audience_re_4i5q.png"}
        maxWidth={"325px"}
      />
    </div>
  );
};

export default Music;
