import styles from "../styles/HomeCategory.module.scss";
import headphoneImage from "../assets/cart/image-xx99-mark-one-headphones.jpg";
import speakerImage from "../assets/cart/image-zx9-speaker.jpg";
import earphoneImage from "../assets/cart/image-yx1-earphones.jpg";
import ProductCard from "./ProductCard";
const HomeCategory = () => {
  const handleButton = () => {
    console.log("Button Clicked");
  };
  return (
    <div>
      <ProductCard
        image={headphoneImage}
        alt="Headphone"
        title="Headphone"
        handleButton={handleButton}
      />
      <ProductCard
        image={speakerImage}
        alt="Speakers"
        title="Speaker"
        handleButton={handleButton}
      />
      <ProductCard
        image={earphoneImage}
        alt="Earphones"
        title="Earphone"
        handleButton={handleButton}
      />
    </div>
  );
};

export default HomeCategory;
