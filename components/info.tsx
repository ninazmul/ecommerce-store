"use client";

import { useState } from "react";
import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { MinusCircle, PlusCircle, ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();
  const [quantity, setQuantity] = useState(1);

  const onAddToCart = () => {
    cart.addItem({ ...data, quantity });
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, parseInt(e.target.value, 10));
    setQuantity(value);
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div className="flex items-center gap-x-2">
            <span className="font-semibold">{data.size?.name}</span>
            <span className="text-gray-700">{data.size?.value}</span>
          </div>
        </div>
        <div className="flex items-center gap-x-4 mt-2">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data.color?.value }}
          />
        </div>
      </div>
      <div className="mt-6 flex items-center gap-x-4">
        <label htmlFor="quantity" className="font-semibold text-black">
          Quantity:
        </label>
        <div className="flex items-center gap-x-2">
          <Button
            type="button"
            onClick={decrementQuantity}
            className="w-8 h-8 text-xl flex items-center justify-center bg-[#009900]"
          >
            -
          </Button>
          <input
            id="quantity"
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min={1}
            className="w-16 border rounded-md py-1 px-2 text-center"
          />
          <Button
            type="button"
            onClick={incrementQuantity}
            className="w-8 h-8 text-xl flex items-center justify-center bg-[#009900]"
          >
            +
          </Button>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button
          onClick={onAddToCart}
          className="flex items-center gap-x-2 bg-[#009900]"
        >
          Add To Cart <ShoppingCart />
        </Button>
      </div>
      {data.description && (
        <div className="mt-10 prose prose-lg">
          <div dangerouslySetInnerHTML={{ __html: data.description }} />
        </div>
      )}
    </div>
  );
};

export default Info;
