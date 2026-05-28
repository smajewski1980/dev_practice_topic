import styles from "./PopularTopicsCard.module.css";
import { Link } from "react-router-dom";

const PopularTopicsCard = ({ imgSrc, title, icon }) => {
  return (
    <div
      className={styles.popularCard}
      style={{ "--icon-clr": icon[0], "--icon-num": `'${icon[1]}'` }}
    >
      <div className={styles.imgWrapper}>
        <img
          src={imgSrc}
          alt=''
        />
      </div>
      <div className={styles.contentWrapper}>
        <h3>{title}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          inventore, quibusdam sunt laboriosam beatae iste recusandae, expedita!
        </p>
        <Link to='#'>
          <button> Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default PopularTopicsCard;
