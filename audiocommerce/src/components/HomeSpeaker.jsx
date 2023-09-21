import speakerImage from "../assets/product-zx9-speaker/mobile/image-category-page-preview-removebg-preview.png";
import styles from "../styles/HomeSpeaker.module.scss";
const HomeSpeaker = () => {
  return (
    <div className={styles["container"]}>
      <img src={speakerImage} alt="Speaker" />
      <h2 className={styles["h2-element"]}>ZX9 SPEAKER</h2>
      <p className={styles["p-element"]}>
        Upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound.
      </p>
      <button>SEE PRODUCT</button>
    </div>
  );
};

export default HomeSpeaker;
