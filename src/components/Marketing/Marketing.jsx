import CardInfo from "../CardInfo/CardInfo";
import styles from "./Marketing.module.css";

const Marketing = () => {
  const cardInfoText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, laborum!";
  return (
    <div className={styles.cardWrapper}>
      <CardInfo
        title={"Advertising"}
        icon={{ color: "#B22222", number: "30" }}
        text={cardInfoText}
        img={"/images/topics/undraw_online_ad_re_ol62.png"}
        maxWidth={"325px"}
      />
      <CardInfo
        title={"Video Content"}
        icon={{ color: "#B22222", number: "65" }}
        text={cardInfoText}
        img={"/images/topics/undraw_Group_video_re_btu7.png"}
        maxWidth={"325px"}
      />
      <CardInfo
        title={"Viral Tweet"}
        icon={{ color: "#B22222", number: "50" }}
        text={cardInfoText}
        img={"/images/topics/undraw_viral_tweet_gndb.png"}
        maxWidth={"325px"}
      />
    </div>
  );
};

export default Marketing;
