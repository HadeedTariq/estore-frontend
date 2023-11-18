import { useQuery } from "@tanstack/react-query";
import React from "react";
import { productApi } from "../lib/axios";
import Product from "../Components/Product";
import { useDispatch } from "react-redux";
import { addAllProduct } from "../store/reducers/productReducer";
import Loading from "../Components/Loading";

const Home = () => {
  const dispatch = useDispatch();
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await productApi.get("/");
      dispatch(addAllProduct(data));
      return data;
    },
  });
  if (isError)
    return (
      <h3 className="text-center text-3xl font-bold my-10">
        Something went wrong😑
      </h3>
    );
  if (isLoading) return <Loading />;
  return (
    <div className="flex justify-center gap-7 flex-wrap p-2">
      {products?.map((product) => (
        <Product product={product} add key={product._id} />
      ))}
    </div>
  );
};

export default Home;
