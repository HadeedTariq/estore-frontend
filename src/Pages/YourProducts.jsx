import React from "react";
import Product from "../Components/Product";
import { useSelector } from "react-redux";

const YourProducts = () => {
  const { cartProducts } = useSelector((state) => state.products);
  return (
    <div className="flex justify-center gap-7 flex-wrap p-2">
      {cartProducts?.map((product) => (
        <Product product={product} key={product._id} />
      ))}
    </div>
  );
};

export default YourProducts;
