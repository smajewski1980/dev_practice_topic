import styles from "./Education.module.css";
import CardInfo from "../CardInfo/CardInfo";

const Education = () => {
  const cardInfoText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, unde?";
  return (
    <div className={styles.cardWrapper}>
      <CardInfo
        title={"Graduation"}
        icon={{ color: "#80d0c7", number: "80" }}
        text={cardInfoText}
        img={"/images/topics/undraw_Graduation_re_gthn.png"}
        maxWidth={"500px"}
      />
      <CardInfo
        title={"Educator"}
        icon={{ color: "#80d0c7", number: "75" }}
        text={cardInfoText}
        img={"/images/topics/undraw_Educator_re_ju47.png"}
        maxWidth={"500px"}
      />
    </div>
  );
};

export default Education;
