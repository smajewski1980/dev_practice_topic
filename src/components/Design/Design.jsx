import CardInfo from "../CardInfo/CardInfo";
import styles from "./Design.module.css";

const Design = () => {
  const card1InfoText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, libero?";
  const card2InfoText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, libero?";
  const card3InfoText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, libero?";

  return (
    <div className={styles.cardWrapper}>
      <CardInfo
        title={"Web Design"}
        icon={{ color: "#00B3F4", number: "14" }}
        text={card1InfoText}
        img={"/images/topics/undraw_Remote_design_team_re_urdx.png"}
        maxWidth={"325px"}
      />
      <CardInfo
        title={"Graphic"}
        icon={{ color: "#00B3F4", number: "75" }}
        text={card2InfoText}
        img={"/images/topics/undraw_Redesign_feedback_re_jvm0.png"}
        maxWidth={"325px"}
      />
      <CardInfo
        title={"Logo Design"}
        icon={{ color: "#00B3F4", number: "100" }}
        text={card3InfoText}
        img={"/images/topics/colleagues-working-cozy-office-medium-shot.png"}
        maxWidth={"325px"}
      />
    </div>
  );
};

export default Design;
