import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./features/products/productSlice";
import filterReducer from "./features/filters/FilterSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    filter: filterReducer,
  },
});

export default store;
