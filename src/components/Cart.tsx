import { CartItem as CartItemType } from "../App";
import Button from "./Button";
import CartItem from "./CartItem";
import { Product } from "./ProductCard";

type CartProps = {
  cart: CartItemType[];
  removeItem: (item: Product) => void;
  confirmOrder: () => void;
};

const Cart = ({ cart, removeItem, confirmOrder }: CartProps) => {
  return (
    <div className="w-full lg:max-w-[290px] xl:max-w-[384px] shrink bg-white p-6 rounded-xl font-redhat-text flex flex-col gap-6">
      <h2 className="text-Red text-2xl leading-[125%] tracking-normal font-bold ">
        Your Cart ({cart.reduce((sum, p) => sum + p.count, 0)})
      </h2>
      {cart.length === 0 && (
        <div className="mt-6">
          <img
            className="mx-auto"
            src="images/illustration-empty-cart.svg"
            alt=""
          />
          <p className="text-Rose-500 text-base font-bold text-center">
            Your added items will appear here
          </p>
        </div>
      )}

      {cart.map(p => (
        <CartItem
          key={p.item.name}
          item={p.item}
          count={p.count}
          removeItem={removeItem}
        />
      ))}

      {cart.length > 0 && (
        <>
          <div className="flex justify-between items-center">
            <span className="text-Rose-900 text-sm leading-[150%] tracking-normal">
              Order Total
            </span>
            <span className="text-Rose-900 text-2xl leading-[125%] tracking-normal font-bold">
              $
              {cart
                .reduce((sum, p) => sum + p.count * p.item.price, 0)
                .toFixed(2)}
            </span>
          </div>

          <div className="flex gap-2 justify-center items-center bg-Rose-50 py-4 rounded-lg">
            <img
              src="images/icon-carbon-neutral.svg"
              alt="icon green tree carbon neutral "
            />
            <p className="text-sm leading-[150%] tracking-normal text-Rose-900">
              This is a <span className="font-bold">carbon-neutral</span>{" "}
              delivery
            </p>
          </div>

          <Button onClick={confirmOrder} label="Confirm Order" />
        </>
      )}
    </div>
  );
};

export default Cart;
