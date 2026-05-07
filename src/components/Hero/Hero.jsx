import styles from "./Hero.module.css";

const Hero = () => {
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
          {/* gonna make 2 types of card component */}
          {/* the left one will be type a and the right one will be type b */}
        </div>
      </section>
    </>
  );
};

export default Hero;
