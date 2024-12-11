import AddToCartButton from "./AddToCartButton";

export type Product = {
  name: string;
  category: string;
  price: number;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

type ProductCardProps = {
  product: Product;
  count: number;
  addItem: (item: Product) => void;
  removeItem: (item: Product) => void;
  decreaseItem: (item: Product) => void;
};

const ProductCard = ({
  product,
  count,
  addItem,
  decreaseItem,
}: ProductCardProps) => {
  if (!product) return null;
  return (
    <div className="flex flex-col gap-8 lg:max-w-[251px] font-redhat-text">
      <div
        className={
          count > 0
            ? "rounded-lg outline outline-2 outline-Red relative"
            : "rounded-lg relative"
        }
      >
        <img src={product.image.desktop} alt="waffle" className="rounded-lg" />
        <AddToCartButton
          count={count}
          addItem={addItem}
          item={product}
          decreaseItem={decreaseItem}
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-Rose-500 text-sm leading-[150%]">
          {product.category}
        </span>
        <span className="text-Rose-900 text-base leading-[150%] font-semibold">
          {product.name}
        </span>
        <span className="text-Red text-base leading-[150%] font-semibold">
          ${product.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
