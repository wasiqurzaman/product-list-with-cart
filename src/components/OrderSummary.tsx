import { CartItem } from "../App";
import SummaryItem from "./SummaryItem";

type OrderSumaryProps = {
  cart: CartItem[];
};

const OrderSummary = ({ cart }: OrderSumaryProps) => {
  console.log(cart);
  return (
    <div className="p-6 bg-Rose-50 rounded-lg flex flex-col gap-6">
      {cart.map(product => (
        <SummaryItem
          key={product.item.name}
          item={product.item}
          count={product.count}
        />
      ))}
      <div className="flex justify-between items-center">
        <span className="text-Rose-900 text-sm leading-[150%] tracking-normal">
          Order Total
        </span>
        <span className="text-Rose-900 text-2xl leading-[125%] tracking-normal font-bold">
          ${cart.reduce((sum, p) => sum + p.count * p.item.price, 0).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default OrderSummary;
