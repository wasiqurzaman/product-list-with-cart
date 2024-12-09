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
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="flex flex-col gap-8 w-[251px]  ml-16 mt-16">
      <div className="rounded-lg relative">
        <img src={product.image.desktop} alt="waffle" className="rounded-lg" />
        <AddToCartButton />
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
