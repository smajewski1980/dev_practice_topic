import styles from "./ListingHero.module.css";
import { Link } from "react-router-dom";

const ListingHero = () => {
  return (
    <section className={styles.listingHero}>
      <p className={styles.breadcrumbs}>
        <Link to={"/"}>Homepage</Link> / Topics Listing
      </p>
      <h1>Topics Listing</h1>
    </section>
  );
};

export default ListingHero;
