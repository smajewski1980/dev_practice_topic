import styles from "./How.module.css";
import { useEffect, useRef } from "react";

const How = () => {
  const refOne = useRef(null);
  const refTwo = useRef(null);
  const refThree = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log(entry.intersectionRatio);
        }
      },
      {
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: "-47% 0px",
      },
    );

    observer.observe(refOne.current);
    // observer.observe(refTwo.current);
    // observer.observe(refThree.current);

    return () => {
      if (refOne.current) {
        observer.unobserve(refOne.current);
      }
      // if (refTwo.current) {
      //   observer.unobserve(refTwo.current);
      // }
      // if (refThree.current) {
      //   observer.unobserve(refThree.current);
      // }
    };
  }, [refOne, refTwo, refThree]);

  return (
    <section
      id='how'
      className={styles.sectionHow}
    >
      <h2 className={styles.howHeading}>How does it work?</h2>

      <div className={styles.howTextWrapper}>
        <p
          ref={refOne}
          className={styles.title}
        >
          Search Your Favorite Topic
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae maiores
          minima iusto assumenda, soluta quasi esse fuga sapiente tempore neque
          vitae ad labore cumque. Placeat enim quibusdam sapiente odit
          reiciendis!
        </p>

        <p
          ref={refTwo}
          className={styles.title}
        >
          Bookmark & keep it for yourself
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae maiores
          minima iusto assumenda, soluta quasi esse fuga sapiente tempore neque
          vitae ad labore cumque. Placeat enim quibusdam sapiente odit
          reiciendis!
        </p>

        <p
          ref={refThree}
          className={styles.title}
        >
          Read & Enjoy
        </p>

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
