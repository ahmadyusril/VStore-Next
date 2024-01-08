"use client";

import { formatPrice } from "@/components/Product/formatPrice";
import { CartProductType } from "@/components/Product/productDetails";
import { truncateText } from "@/components/truncateText";
import Link from "next/link";

interface ItemContentProps {
  item: CartProductType;
}

const ItemContent: React.FC<ItemContentProps> = ({ item }) => {
  return (
    <div
      className="
  grid
  grid-cols-5
  text-xs
  md:text-sm
  gap-4
  border-[1.5px]
  border-white
  py-4
  items-center
  "
    >
      <div
        className="
      cols-span-2 
      justify-self-start
      flex
      gap-2
      md:gap-4
      "
      >
        <Link href={`/product/${item.id}`}>
          <div></div>
        </Link>
        <div className="flex flex-col justify-between">
          <Link href={`/product/${item.id}`}>{truncateText(item.name)}</Link>
          <div>{item.selectedImg.color}</div>
          <div className="w-[70px]">
            <button className="text-red-500 underline" onClick={() => {}}>
              Remove
            </button>
          </div>
        </div>
      </div>
      <div>{formatPrice(item.price)}</div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ItemContent;
