import { useDispatch, useSelector } from "react-redux";
// import { useProduct } from "../../../context/ProductContext";
import "./Filters.css";
import Rating from "./Rating";
import {
  clearFilter,
  filterByDelivery,
  filterByRating,
  filterByStock,
  highToLow,
  lowToHigh,
} from "./FilterSlice";
import { Children } from "react";
function Filters() {
  // const { sort, dispatch, byStock, byFastDelivery, byRating } = useProduct();

  const filter = useSelector((store) => store.filter);

  const { sort, byStock, byFastDelivery, byRating } = filter;
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <div className="sidebar-title">Filter Products</div>
      <div className="filter-option">
        <input
          type="radio"
          id="ascending"
          name="sort"
          value="ascending"
          onChange={() => dispatch(lowToHigh())}
          checked={sort === "lowToHigh" ? true : false}
        />
        <label htmlFor="ascending">Ascending</label>
      </div>
      <div className="filter-option">
        <input
          type="radio"
          id="descending"
          name="sort"
          value="descending"
          onChange={() => dispatch(highToLow())}
          checked={sort === "highToLow" ? true : false}
        />
        <label htmlFor="descending">Descending</label>
      </div>
      <div className="filter-option">
        <input
          type="checkbox"
          id="outOfStock"
          onChange={() => dispatch(filterByStock(byStock))}
          checked={byStock}
        />
        <label htmlFor="outOfStock">Include out of stock</label>
      </div>
      <div className="filter-option">
        <input
          type="checkbox"
          id="fastDelivery"
          onChange={() => dispatch(filterByDelivery(byFastDelivery))}
          checked={byFastDelivery}
        />
        <label htmlFor="fastDelivery">Fast Delivery only</label>
      </div>
      <span className="rating-label">
        Rating:{" "}
        <Rating
          rating={byRating}
          onHandleClick={(i) => dispatch(filterByRating(i))}
          style={{ cursor: "pointer" }}
        />
      </span>

      <button className="clear-button" onClick={() => dispatch(clearFilter())}>
        Clear filter
      </button>
    </div>
  );
}

export default Filters;
