import { Product } from "./ProductCard";

type SummaryItemProps = {
  item: Product;
  count: number;
};

const SummaryItem = ({ item, count }: SummaryItemProps) => {
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
    </div>
  );
};

export default SummaryItem;