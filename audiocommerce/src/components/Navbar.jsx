import styles from "../styles/Navbar.module.scss";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className={styles.navbar}>
      <button className={styles["menu-icon"]} onClick={toggleMenu}>
        {isMenuOpen ? "✖" : "☰"}{" "}
      </button>
      <div className={styles.title}>Audiophile</div>
      <div className={styles["cart-icon"]}>🛒</div>
    </nav>
  );
};

export default Navbar;
