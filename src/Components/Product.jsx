import React from "react";
import { BsEye } from "react-icons/bs";
import CartHandler from "./CartHandler";
import {
  addProductToCart,
  removeProductFromCart,
} from "../store/reducers/productReducer";
import { useNavigate } from "react-router-dom";

const Product = ({ product, add }) => {
  const { productName, productImage, productDescription, productPrice } =
    product;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col  w-[280px] h-fit rounded-sm overflow-hidden bg-white gap-1 pb-3 text-black">
      <img
        src={productImage}
        alt="product"
        className="w-full h-44 object-fill"
      />
      <h3 className="text-emerald-600 font-bold mx-2 text-[23px]">
        {productName.slice(0, 10)}
      </h3>
      <p className="text-yellow-600 font-semibold font-mono mx-2 text-[21px]">
        <span className="text-green-500">Price:</span> {productPrice}
      </p>
      <p className=" font-semibold  mx-2 text-[18px]">
        {productDescription.slice(0, 70)}...
      </p>
      {add ? (
        <CartHandler
          bg={"bg-emerald-400"}
          product={product}
          add
          handleClick={addProductToCart}>
          Add To Cart
        </CartHandler>
      ) : (
        <CartHandler
          bg={"bg-red-700"}
          product={product}
          handleClick={removeProductFromCart}>
          Remove From Cart
        </CartHandler>
      )}
      <button
        onClick={() => navigate(`/product/${product._id}`)}
        className="bg-green-500 rounded-md p-[4px] text-center text-[20px] mx-2 text-white">
        <BsEye size={27} className="mx-auto" />
      </button>
    </div>
  );
};

export default Product;
