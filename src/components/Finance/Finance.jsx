import CardInfo from "../CardInfo/CardInfo";
import CardCTA from "../CardCTA/CardCTA";
import styles from "./Finance.module.css";

const Finance = () => {
  const cardInfoText =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, eaque!";
  return (
    <div className={styles.cardWrapper}>
      <CardInfo
        title={"Investment"}
        icon={{ color: "#00B3F4", number: "30" }}
        text={cardInfoText}
        img={"/images/topics/undraw_Finance_re_gnv2.png"}
        maxWidth={"500px"}
      />
      <CardCTA
        img={false}
        icon={{ color: "#0039f4", number: "25" }}
        maxHeight={"325px"}
      />
    </div>
  );
};

export default Finance;
