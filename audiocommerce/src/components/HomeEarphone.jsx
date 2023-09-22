import styles from "../styles/HomeEarphone.module.scss";
import EarphoneImage from "../assets/home/mobile/image-earphones-yx1.jpg";
const HomeEarphone = () => {
  return (
    <div className={styles["container"]}>
      <img src={EarphoneImage} alt="Earphones" />
      <h1 className={styles["title"]}>YX1 EARPHONES</h1>
      <button className={styles["btn"]}>SEE PRODUCT</button>
    </div>
  );
};

export default HomeEarphone;
