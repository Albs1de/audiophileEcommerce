import headphoneImage from "../assets/cart/image-xx99-mark-one-headphones.jpg";
import speakerImage from "../assets/cart/image-zx9-speaker.jpg";
import earphoneImage from "../assets/cart/image-yx1-earphones.jpg";
import ProductCard from "./ProductCard";
import HomeSpeaker from "./HomeSpeaker";
import HomeSpeakerZX7 from "./HomeSpeakerZX7";
import HomeEarphone from "./HomeEarphone";

const HomeCategory = () => {
  const handleButton = () => {
    console.log("Button Clicked");
  };
  return (
    <>
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
      <HomeSpeaker />
      <HomeSpeakerZX7 />
      <HomeEarphone />
    </>
  );
};

export default HomeCategory;
