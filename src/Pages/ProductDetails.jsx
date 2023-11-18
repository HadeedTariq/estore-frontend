import React, { useMemo, useState } from "react";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const { id } = useParams();
  const { allProducts } = useSelector((state) => state.products);
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState(1);
  const product = useMemo(() => {
    const product = allProducts?.find((prod) => prod._id === id);
    if (product && product?.productPrice) {
      setPrice(
        parseInt(
          product?.productPrice.split("$")[1].split(".")[0].replace(/,/g, "")
        )
      );
    }
    return product;
  }, [id]);
  const handlePrice = (value, type = "") => {
    const price = parseInt(value.split("$")[1].split(".")[0].replace(/,/g, ""));
    if (type === "increase") {
      setPrice((prev) => prev + price);
      setQuantity((prev) => prev + 1);
    } else {
      if (quantity <= 1) return;
      setPrice((prev) => prev - price);
      setQuantity((prev) => prev - 1);
    }
  };
  if (!product) return <Navigate to={"/"} />;
  return (
    <>
      {product.productName && (
        <div className="flex items-center max-[881px]:flex-col max-[881px]:py-2 py-24 px-3 gap-8">
          <div className="w-96 h-96 max-[881px]:w-full">
            <img
              src={product.productImage}
              className="w-full h-full object-contain max-[420px]:object-fill"
            />
          </div>
          <div className="w-[600px] flex flex-col gap-2 max-[881px]:w-full max-[881px]:p-4">
            <h3 className="text-emerald-400 font-[500] text-[30px] max-[420px]:text-[25px]">
              {product.productName}
            </h3>
            <p className="text-yellow-400 font-serif text-[19px] max-[420px]:text-[17px]">
              {product.productDescription}
            </p>
            <div className="flex justify-between items-center mt-2 max-[420px]:flex-col max-[420px]:items-start max-[420px]:gap-4">
              <p className="text-lg font-mono font-semibold">
                <span className="text-pink-400 text-[23px]">Price:</span> $
                {price}
              </p>
              <div>
                <button
                  className="text-[20px]  border rounded-sm   h-10 text-center px-4 cursor-pointer mx-3"
                  onClick={() => handlePrice(product.productPrice)}>
                  -
                </button>
                <span className="text-bold text-[23px]">{quantity}</span>
                <button
                  className="text-[20px]  border rounded-sm py-1 h-10 text-center  px-4 cursor-pointer mx-3"
                  onClick={() => handlePrice(product.productPrice, "increase")}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
