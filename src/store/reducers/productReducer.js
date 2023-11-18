import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productCount: 0,
  allProducts: [],
  cartProducts: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addAllProduct: (state, { payload }) => {
      state.allProducts = payload;
    },
    addProductToCart: (state, { payload }) => {
      const getProduct = state.allProducts.find(
        (product) => product._id === payload._id
      );
      state.productCount += 1;
      state.cartProducts = [...state.cartProducts, getProduct];
    },
    removeProductFromCart: (state, { payload }) => {
      const getProduct = state.cartProducts.filter(
        (product) => product._id !== payload._id
      );
      state.productCount -= 1;
      state.cartProducts = getProduct;
    },
  },
});

export const { addAllProduct, addProductToCart, removeProductFromCart } =
  productSlice.actions;
export default productSlice.reducer;
