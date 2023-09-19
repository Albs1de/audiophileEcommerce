import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <div className={styles["home-container"]}>
      <h3 className={styles["h3-element"]}>New product</h3>
      <h1 className={styles["h1-element"]}>XX99 Mark II Headphones</h1>
      <p className={styles["p-element"]}>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <button className={styles["button-element"]} type="submit">
        SEE PRODUCT
      </button>
    </div>
  );
};

export default Home;
