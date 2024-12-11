import { CartItem } from "../App";
import ProductCard, { Product } from "./ProductCard";

type ProductsProps = {
  products: Product[];
  cart: CartItem[];
  addItem: (item: Product) => void;
  removeItem: (item: Product) => void;
  decreaseItem: (item: Product) => void;
};

const Products = ({
  products,
  cart,
  addItem,
  removeItem,
  decreaseItem,
}: ProductsProps) => {
  return (
    <div className="flex flex-col justify-center gap-8 w-full ">
      <h2 className="text-[40px] font-bold leading-[120%] tracking-normal font-redhat-text">
        Desserts
      </h2>
      <div className="grid justify-items-center xs:justify-items-stretch xs:grid-cols-2 sm:grid-cols-3 gap-y-8  gap-x-6 lg:gap-x-6">
        {products.map(product => (
          <ProductCard
            product={product}
            count={cart?.find(p => p.item.name === product.name)?.count || 0}
            key={product.name}
            addItem={addItem}
            removeItem={removeItem}
            decreaseItem={decreaseItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
