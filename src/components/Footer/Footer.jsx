import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img
        src='/images/logo.png'
        alt=''
      />
      <div className={styles.footerCol2}>column 2</div>
      <div className={styles.footerCol3}>column 3</div>
      <div className={styles.footerCol4}>column 4</div>
    </footer>
  );
};

export default Footer;
