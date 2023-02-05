import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../features/api/apiSlice";
import cartSlice from "../features/cart/cartSlice";
import filterSlice from "../features/filter/filterSlice";
import cartCounter from "../middlewares/cartCounter";

const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    filter: filterSlice,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
console.log(store.getState());

export default store;
