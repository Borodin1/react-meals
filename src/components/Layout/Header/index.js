//styles
import styles from "./Header.module.css";

//assets
import meals from "../../../assets/meals.jpg";
import { HeaderButton } from "../../HeaderButton";

export const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderButton onShowCart={onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={meals} alt="a table of full of delicious food!" />
      </div>
    </>
  );
};
