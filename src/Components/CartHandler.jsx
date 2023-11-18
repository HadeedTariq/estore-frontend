import React from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

const CartHandler = ({ bg, handleClick, product, children, add }) => {
  const { cartProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const handlePropFunction = () => {
    if (add) {
      const productCart = cartProducts?.find(
        (prod) => prod._id === product._id
      );
      if (productCart) {
        toast.error("Product already added", { duration: 800 });
        return;
      }
    }
    toast.success("Added To Cart", { duration: 1200 });
    dispatch(handleClick(product));
  };
  return (
    <button
      className={`${bg} rounded-md p-[4px] text-center text-[20px] mx-2 text-white`}
      onClick={handlePropFunction}>
      {children}
    </button>
  );
};

export default CartHandler;
