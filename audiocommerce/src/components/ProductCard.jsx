import styles from "../styles/ProductCard.module.scss";
const ProductCard = ({ image, alttext, title, handleButton }) => {
  return (
    <div className={styles["card-container"]}>
      <img src={image} alt={alttext} />
      <h3>{title}</h3>
      <button onClick={handleButton}>SHOP</button>
    </div>
  );
};

export default ProductCard;
