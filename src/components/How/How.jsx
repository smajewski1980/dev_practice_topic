import styles from "./How.module.css";

const How = () => {
  return (
    <section
      id='how'
      className={styles.sectionHow}
    >
      <h2 className={styles.howHeading}>How does it work?</h2>

      <div className={styles.howTextWrapper}>
        <p className={styles.title}>Search Your Favorite Topic</p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae maiores
          minima iusto assumenda, soluta quasi esse fuga sapiente tempore neque
          vitae ad labore cumque. Placeat enim quibusdam sapiente odit
          reiciendis!
        </p>

        <p className={styles.title}>Bookmark & keep it for yourself</p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae maiores
          minima iusto assumenda, soluta quasi esse fuga sapiente tempore neque
          vitae ad labore cumque. Placeat enim quibusdam sapiente odit
          reiciendis!
        </p>

        <p className={styles.title}>Read & Enjoy</p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae maiores
          minima iusto assumenda, soluta quasi esse fuga sapiente tempore neque
          vitae ad labore cumque. Placeat enim quibusdam sapiente odit
          reiciendis!
        </p>
      </div>

      <div className={styles.cta}>
        <p>Want to learn more?</p>

        <button>Check out Youtube</button>
      </div>
    </section>
  );
};

export default How;
