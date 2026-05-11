import styles from "./How.module.css";
import { useEffect, useRef, useState } from "react";

const How = () => {
  const refOne = useRef(null);
  const refTwo = useRef(null);
  const refThree = useRef(null);
  const textWrapperRef = useRef(null);
  // const thresholdArray = Array.from({ length: 101 }, (_, i) => i / 100);
  const thresholdArray = Array.from({ length: 81 }, (_, i) => i / 100);

  const [scrollAnimFlag, setScrollAnimFlag] = useState(false);

  // linear gradient bg on the lines
  // change background position to visually move the color down

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.className = `${styles.titleActive} ${styles.title}`;
        } else {
          entry.target.className = styles.title;
        }
      },
      {
        threshold: [0.5],
        rootMargin: "0px 0px -46% 0px",
      },
    );

    observer.observe(refOne.current);
    observer.observe(refTwo.current);
    observer.observe(refThree.current);

    return () => {
      if (refOne.current) {
        observer.unobserve(refOne.current);
      }
      if (refTwo.current) {
        observer.unobserve(refTwo.current);
      }
      if (refThree.current) {
        observer.unobserve(refThree.current);
      }
    };
  }, [refOne, refTwo, refThree]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const currRatio = entry.intersectionRatio.toFixed(2);
          if (currRatio < 0.8) {
            console.log(entry.intersectionRatio.toFixed(2));
            entry.target.style.setProperty(
              "--gradient-stop",
              `${currRatio * 120}%`,
            );
          }
        }
      },
      {
        threshold: thresholdArray,
        rootMargin: "50% 0px -46% 0px",
      },
    );

    observer.observe(textWrapperRef.current);

    return () => {
      if (textWrapperRef.current) {
        observer.unobserve(textWrapperRef.current);
      }
    };
  }, [textWrapperRef]);

  return (
    <section
      id='how'
      className={styles.sectionHow}
    >
      <h2 className={styles.howHeading}>How does it work?</h2>

      <div
        ref={textWrapperRef}
        className={styles.howTextWrapper}
      >
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
