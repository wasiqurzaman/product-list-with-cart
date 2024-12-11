import { useState } from "react";
import Cart from "./components/Cart";
import Products from "./components/Products";
import data from "./data/data.json";
import { Product } from "./components/ProductCard";
import ConfirmModal from "./components/ConfirmModal";

export type CartItem = {
  item: Product;
  count: number;
};

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const addItem = (item: Product) => {
    if (cart.findIndex(p => p.item.name === item.name) === -1) {
      setCart(cart => [...cart, { item: item, count: 1 }]);
    }

    if (cart.findIndex(p => p.item.name === item.name) !== -1) {
      setCart(cart =>
        cart.map(p =>
          p.item.name === item.name ? { item, count: p.count + 1 } : p
        )
      );
    }
  };

  console.log(cart);

  const removeItem = (item: Product) => {
    setCart(cart => cart.filter(p => p.item.name !== item.name));

    // if (cart.findIndex(p => p.item.name === item.name) === -1) {
    //   setCart(cart => cart.filter(p => p.item.name !== item.name));
    // }
  };

  const decreaseItem = (item: Product) => {
    if (cart.find(p => p.item.name === item.name)?.count === 1) {
      setCart(cart => cart.filter(p => p.item.name !== item.name));
      return;
    }

    setCart(cart =>
      cart.map(p =>
        p.item.name === item.name ? { item, count: p.count - 1 } : p
      )
    );
  };

  const handleConfirmOrder = () => {
    setIsConfirmed(confirm => !confirm);
  };

  const handleReset = () => {
    setCart([]);
    setIsConfirmed(false);
  };

  return (
    <div className="bg-Rose-50">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 p-4 lg:p-8">
        {/* <ProductCard product={data} /> */}
        <Products
          products={data}
          cart={cart}
          addItem={addItem}
          removeItem={removeItem}
          decreaseItem={decreaseItem}
        />
        <Cart
          cart={cart}
          removeItem={removeItem}
          confirmOrder={handleConfirmOrder}
        />
        {isConfirmed && (
          <ConfirmModal
            cart={cart}
            confirmModal={handleConfirmOrder}
            reset={handleReset}
          />
        )}
      </div>
    </div>
  );
}

export default App;
