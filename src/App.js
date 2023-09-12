//components
import { useState } from "react";
import { Cart } from "./components/Cart";
import { Header } from "./components/Layout/Header";
import { Meals } from "./components/Meals";

//store
import { CartProvider } from "./lib/store/Provider";

function App() {
  const [showModal, setShowModal] = useState(false);

  const showCartHandler = () => {
    setShowModal(true);
  };

  const hideCartHandler = () => {
    setShowModal(false);
  };
  return (
    <CartProvider>
      {showModal && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
