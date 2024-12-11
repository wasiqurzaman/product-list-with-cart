import { Product } from "./ProductCard";

type CartItemProps = {
  item: Product;
  count: number;
  removeItem: (item: Product) => void;
};

const CartItem = ({ item, count, removeItem }: CartItemProps) => {
  return (
    <div className="flex justify-between items-center gap-4 pb-4 font-redhat-text border-b border-Rose-100">
      <div className="flex flex-col gap-1">
        <span className="text-Rose-900 text-sm leading-[150%] tracking-normal font-bold">
          {item.name}
        </span>
        <div className="flex gap-2 items-center text-sm leading-[150%] tracking-normal">
          <span className="text-Red font-bold">{count}x</span>
          <span className="text-Rose-500">@ ${item.price.toFixed(2)}</span>
          <span className="text-Rose-500 font-bold">
            ${(count * item.price).toFixed(2)}
          </span>
        </div>
      </div>
      <button
        onClick={() => removeItem(item)}
        className="group flex items-center justify-center border-[1.8px] p-1 rounded-full border-Rose-400 hover:border-Rose-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
          className="h-2 w-2 stroke-Rose-400 group-hover:stroke-Rose-900"
        >
          <path
            fill="#CAAFA7"
            d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
            className="fill-Rose-400 group-hover:fill-Rose-900"
          />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
