import { Product } from "./ProductCard";

type Props = {
  item: Product;
  count: number;
  addItem: (item: Product) => void;
  decreaseItem: (item: Product) => void;
};

const AddToCartButton = ({ item, count, addItem, decreaseItem }: Props) => {
  const handleIncrement = () => {
    addItem(item);
  };

  const handleDecrement = () => {
    decreaseItem(item);
  };

  if (!count)
    return (
      <button
        onClick={handleIncrement}
        className="w-[50%] xs:w-[65%] sm:w-[70%] flex gap-1 xl:gap-2 items-center justify-center bg-white border-2 border-Rose-400 py-[12.5px] px-[14px] xl:px-[28px] rounded-full absolute bottom-0 translate-y-1/2  -translate-x-1/2 left-[50%] hover:border-Red hover:text-Red transition-colors duration-300 "
      >
        <img src="/images/icon-add-to-cart.svg" alt="cart icon" />
        <span className="text-sm font-bold leading-[150%] tracking-normal">
          Add to Cart
        </span>
      </button>
    );

  return (
    <div className="w-[50%] xs:w-[65%] sm:w-[70%] flex gap-2 items-center justify-between bg-Red border-2 border-Red py-[12px] px-[12px] rounded-full absolute bottom-0 translate-y-1/2 -translate-x-1/2 left-[50%]">
      <button
        onClick={handleDecrement}
        className="group h-6 w-6 border-2 border-white rounded-[50%] flex items-center justify-center hover:bg-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="2"
          fill="none"
          viewBox="0 0 10 2"
          className="group-hover:stroke-Red"
        >
          <path
            fill="#fff"
            d="M0 .375h10v1.25H0V.375Z"
            className="group-hover:fill-Red"
          />
        </svg>
      </button>
      <span className="text-sm font-bold leading-[150%] tracking-normal text-white">
        {count}
      </span>
      <button
        onClick={handleIncrement}
        className="group h-6 w-6 border-2 border-white rounded-[50%] flex items-center justify-center hover:bg-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
          className="group-hover:stroke-Red"
        >
          <path
            fill="#fff"
            d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
            className="group-hover:fill-Red"
          />
        </svg>
      </button>
    </div>
  );
};

export default AddToCartButton;
