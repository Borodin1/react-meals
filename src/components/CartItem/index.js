//styles
import styles from "./CartItem.module.css";

export const CartItem = (props) => {
  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{`${props.price}`}</span>
          <span className={styles.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};
