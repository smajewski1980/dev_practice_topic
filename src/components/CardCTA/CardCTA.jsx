import styles from "../CardCTA.module.css";

const CardCTA = ({ img }) => {
  return (
    <div
      className={img ? `${styles.ctaCardBg} ${styles.ctaCard}` : styles.ctaCard}
    >
      <h3>Finance</h3>
      <span>25</span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum optio
        enim at voluptatum velit culpa beatae quod possimus voluptates
        similique?
      </p>
      <button>Learn More</button>
      <div className={styles.socialWrapper}>
        <p>Share:</p>
        <div className={styles.iconWrapper}>
          <a href='#'>
            <img
              src='/images/twitter.png'
              alt=''
            />
          </a>
          <a href='#'>
            <img
              src='/images/facebook.png'
              alt=''
            />
          </a>
          <a href='#'>
            <img
              src='/images/pintrest.png'
              alt=''
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardCTA;
