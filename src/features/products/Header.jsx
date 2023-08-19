import { useLocation } from "react-router-dom";
// import { useProduct } from "../context/ProductContext";
import AddToCart from "./AddToCart";
import CustomDropdown from "./AddToCart";
import "./Header.css";

import { useDispatch, useSelector } from "react-redux";
import { showCartModal } from "./productSlice";
import { searchByName } from "../filters/FilterSlice";

function Header() {
  // const { search, dispatch, isShowModal, cart } = useProduct();
  const productFeature = useSelector((store) => store.product);
  const { search, isShowModal, cart } = productFeature;

  const dispatch = useDispatch();
  const numOfAddedItem = cart.length;

  return (
    <>
      <div className="header">
        <div className="logo">Shopping Cart</div>
        {/* {useLocation().pathname.split("/")[1] !== "cart" && ( */}
        <div className="search-bar">
          <input
            value={search}
            onChange={(e) => dispatch(searchByName(e.target.value))}
            type="text"
            placeholder="Search"
          />
          {/* <i className="fas fa-search"></i> */}
          <span className="search-icon">&#128269;</span>
        </div>
        {/* // )} */}
        <div
          className="cart-dropdown"
          onClick={() => dispatch(showCartModal())}
        >
          <span className="cart-icon">&#128722;</span>
          <div className="cart-items-count">{numOfAddedItem}</div>

          <div className="dropdown-icon"> {`${isShowModal ? "▲" : "▼"}`}</div>
        </div>
      </div>
    </>
  );
}

export default Header;
