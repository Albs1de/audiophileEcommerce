import speakerImage from "../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg";
import styles from "../styles/HomeSpeaker.module.scss";
const HomeSpeaker = () => {
  return (
    <div className={styles["container"]}>
      <img src={speakerImage} alt="Speaker" />
      <h2>ZX9 SPEAKER</h2>
      <p>
        Upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound. See product
      </p>
    </div>
  );
};

export default HomeSpeaker;
