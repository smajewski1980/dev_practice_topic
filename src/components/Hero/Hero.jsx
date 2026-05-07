import styles from "./Hero.module.css";
import CardInfo from "../CardInfo/CardInfo";
import CardCTA from "../CardCTA/CardCTA";

const Hero = () => {
  const cardInfoText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sequi perspiciatis laborum eum itaque debitis optio nemo deserunt modi alias.";
  return (
    <>
      <section
        id='hero'
        className={styles.sectionHero}
      >
        <div className={styles.heroInputSection}>
          <h1>Discover. Learn. Enjoy</h1>
          <p>platform for creatives around the world</p>
          <div className={styles.inputWrapper}>
            <img
              src='/images/search-icon.png'
              alt=''
            />
            <input
              type='text'
              name='search'
              id='search'
              placeholder='Design, Code, Marketing, Finance ...'
            />
            <button>Search</button>
          </div>
        </div>
        <div className={styles.heroCardSection}>
          <CardInfo
            title={"Web Design"}
            icon={{ color: "#00B3F4", number: "14" }}
            text={cardInfoText}
            img={"/images/topics/undraw_Remote_design_team_re_urdx.png"}
          />
          <CardCTA img={true} />
        </div>
      </section>
    </>
  );
};

export default Hero;
