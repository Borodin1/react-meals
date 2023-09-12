//styles
import styles from "./MealItemForm.module.css";

//components
import { Input } from "../../UI/Input";
import { useRef, useState } from "react";

export const MealItemForm = (props) => {
  const [amountValid, setAmountValid] = useState(true);
  const amountRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountRef.current.value;
    const enternedAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enternedAmountNumber < 1 ||
      enternedAmountNumber > 5
    ) {
      setAmountValid(false);
      return;
    }
    props.onAddToCart(enternedAmountNumber);
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};
