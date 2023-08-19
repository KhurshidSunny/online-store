import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import productReducer from "./features/products/productSlice";
import filterReducer from "./features/filters/FilterSlice";

const rootReducer = combineReducers({
  product: productReducer,
  filter: filterReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
