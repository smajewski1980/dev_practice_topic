import styles from "./PopTopicsNav.module.css";

const PopTopicsNav = () => {
  return (
    <nav className={styles.paginationNav}>
      <ul>
        <li>Prev</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>Next</li>
      </ul>
    </nav>
  );
};

export default PopTopicsNav;
