import styles from "./ContactHero.module.css";
import { Link } from "react-router-dom";

const ContactHero = () => {
  return (
    <div className={styles.contactHero}>
      <p className={styles.breadcrumbs}>
        <Link to={"/"}>Homepage</Link> / Contact
      </p>
      <h1>Contact Form</h1>
    </div>
  );
};

export default ContactHero;
