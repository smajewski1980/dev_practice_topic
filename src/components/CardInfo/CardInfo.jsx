import styles from "../../components/CardInfo.module.css";

const CardInfo = ({ title, icon, text, img, maxWidth }) => {
  const { color, number } = icon;

  return (
    <div
      style={{ "--max-width": maxWidth }}
      className={styles.cardInfo}
    >
      <h3>{title}</h3>
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
