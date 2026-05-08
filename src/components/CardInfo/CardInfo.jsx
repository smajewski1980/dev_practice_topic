import styles from "../../components/CardInfo.module.css";

const CardInfo = ({ title, icon, text, img, maxWidth }) => {
  const { color, number } = icon;
  const iconStyle = {
    backgoundColor: "red",
  };

  return (
    <div
      style={{ "--max-width": maxWidth }}
      className={styles.cardInfo}
    >
      <h2>{title}</h2>
      <div
        style={{ "--clr-icon": color }}
        className={styles.icon}
      >
        {number}
      </div>
      <p>{text}</p>
      <img
        src={img}
        alt=''
      />
    </div>
  );
};

export default CardInfo;
