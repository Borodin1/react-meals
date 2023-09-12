//Core
import { useContext, useEffect, useState } from "react";

//styles
import styles from "./HeaderButton.module.css";

//elements
import { CartIcon } from "../../assets/CartIcon";
import { CartContext } from "../../lib/store/Context";

export const HeaderButton = ({ onShowCart }) => {
  const [btnIsHighlights, setBtnIsHighlights] = useState(false);
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  const btnStyles = `${styles.button} ${btnIsHighlights ? styles.bump : ""}`;

  useEffect(() => {
    if (cartCtx.items.length > 0) {
      setBtnIsHighlights(true);
    }
    const timer = setTimeout(() => {
      setBtnIsHighlights(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button className={btnStyles} onClick={onShowCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};
