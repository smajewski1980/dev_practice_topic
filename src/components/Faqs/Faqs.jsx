import styles from "./Faqs.module.css";

const Faqs = () => {
  return (
    <section
      className={styles.faqSection}
      id='faqs'
    >
      <h2>Frequently Asked Questions</h2>
      <div className={styles.contentWrapper}>
        <img
          src='/images/faq_graphic.jpg'
          alt=''
        />
        <div className={styles.accordion}>
          <details name='faqs'>
            <summary>
              What is Topic Listing?<span>&#x2303;</span>
            </summary>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              atque esse fuga sequi accusantium aspernatur perspiciatis dicta
              iste? Eos, commodi? Aliquid, tenetur aspernatur voluptas harum
              asperiores veniam eum. Provident, voluptatibus.
            </p>
          </details>
          <details name='faqs'>
            <summary>
              How to find a topic?<span>&#x2303;</span>
            </summary>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              atque esse fuga sequi accusantium aspernatur perspiciatis dicta
              iste? Eos, commodi? Aliquid, tenetur aspernatur voluptas harum
              asperiores veniam eum. Provident, voluptatibus.
            </p>
          </details>
          <details name='faqs'>
            <summary>
              How much does it cost?<span>&#x2303;</span>
            </summary>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              atque esse fuga sequi accusantium aspernatur perspiciatis dicta
              iste? Eos, commodi? Aliquid, tenetur aspernatur voluptas harum
              asperiores veniam eum. Provident, voluptatibus.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
