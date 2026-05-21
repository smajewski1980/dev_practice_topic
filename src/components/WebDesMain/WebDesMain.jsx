import styles from "./WebDesMain.module.css";

const WebDesMain = () => {
  return (
    <main className={styles.webDesMain}>
      <h2>Introduction to Web Design</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nihil
        id hic. Maxime, minus enim. Quis excepturi ut, tempore nesciunt
        repudiandae dolores accusamus dolorum pariatur, modi ex quia labore sed
        praesentium.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nihil
        id hic. Maxime, minus enim. Quis excepturi ut, tempore nesciunt
        repudiandae dolores accusamus dolorum pariatur, modi ex quia labore sed
        praesentium. Nisi ullam voluptatibus numquam.
      </p>

      <p>
        Freelancing your skills isn't going to make you a millionaire overnight.
      </p>

      <div className={styles.imgWrapper}>
        <img
          src='/images/businesswoman-using-tablet-analysis.jpg'
          alt='businesswoman using tablet'
        />
        <img
          src='/images/colleagues-working-cozy-office-medium-shot.jpg'
          alt='colleagues working in a cozy office'
        />
      </div>

      <p className={styles.caption}>
        Most people start with freelancing skills they already have as a side
        hustle to build up income. This extra cash can be used for a vacation,
        to boost up savings, investing, build business.
      </p>
    </main>
  );
};

export default WebDesMain;
