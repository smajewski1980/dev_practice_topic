import CardInfo from "../CardInfo/CardInfo";
import CardCTA from "../CardCTA/CardCTA";
import styles from "./Finance.module.css";

const Finance = () => {
  const cardInfoText =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, eaque!";
  return (
    <div className={styles.cardWrapper}>
      <CardInfo
        title={"Advertising"}
        icon={{ color: "#00B3F4", number: "30" }}
        text={cardInfoText}
        img={"/images/topics/undraw_online_ad_re_ol62.png"}
        maxWidth={"500px"}
      />
      <CardCTA
        img={true}
        icon={{ color: "#0039f4", number: "25" }}
        maxHeight={"300px"}
      />
    </div>
  );
};

export default Finance;
