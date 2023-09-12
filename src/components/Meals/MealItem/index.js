//styles
import { useContext } from "react";
import { MealItemForm } from "../MealItemsForm";
import styles from "./MealItem.module.css";
import { CartContext } from "../../../lib/store/Context";

export const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const onAddToCart = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={onAddToCart} id={props.id} />
      </div>
    </li>
  );
};
