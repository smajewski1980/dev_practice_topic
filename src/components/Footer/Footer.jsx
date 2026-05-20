import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img
        src='/images/logo.png'
        alt=''
      />

      <div className={styles.footerCol2}>
        <h4>Resources</h4>

        <ul>
          <li>Home</li>
          <li>How it wirks</li>
          <li>FAQs</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className={styles.footerCol3}>
        <h4>Information</h4>

        <p>305-240-9671</p>
        <p>info@company.com</p>
      </div>

      <div className={styles.footerCol4}>
        <button popoverTarget='lang-sel-pop'>
          English <span>&#9662;</span>
        </button>

        <div
          popover={"auto"}
          id='lang-sel-pop'
          className={styles.langSelPop}
        >
          Another Language <br />
          Some Other Language
          <br />
          Yet Another One
          <br />
        </div>

        <div>
          <p>Copyright &copy; 2048 Topic Listing Center.</p>
          <p>All rights reserved.</p>
        </div>

        <p>Design: TemplateMo</p>
      </div>
    </footer>
  );
};

export default Footer;
