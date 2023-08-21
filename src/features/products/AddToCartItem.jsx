/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import "./AddToCartItem.css";

import { removeFromCart } from "./productSlice";
// import { useProduct } from "../context/ProductContext";
function AddToCartItem({ item }) {
  // const { removeFromCart } = useProduct();
  const dispatch = useDispatch();

  if (item.add === true) return;

  return (
    <>
      <li className="product-row">
        <img src={item.image} alt="Product 1" className="product-image" />
        <div className="product-details">
          <span className="product-name">{item.productName}</span>
          <span className="product-price">${item.price}</span>
        </div>
        <button
          className="delete-button"
          onClick={() => dispatch(removeFromCart(item))}
        >
          &times;
        </button>
      </li>
    </>
  );
}

export default AddToCartItem;
