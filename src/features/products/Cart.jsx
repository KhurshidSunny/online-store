// import { useProduct } from "../context/ProductContext";
import "./Cart.css";
import SingleProduct from "./SingleProduct";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "./productSlice";
import { useEffect } from "react";

function Cart() {
  // const { products, sort, byStock, byFastDelivery, byRating, search } =
  //   useProduct();
  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(loadProducts());
    },
    [dispatch]
  );

  const productFeature = useSelector((store) => store.product);
  const { products } = productFeature;

  const filter = useSelector((store) => store.filter);
  const { sort, byStock, byFastDelivery, byRating, search } = filter;

  function transformProducts() {
    let sortedProducts = products;
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (byStock) {
      sortedProducts = sortedProducts.filter((item) => item.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((item) => item.fastDelivery);
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (item) => item.rating === byRating
      );
    }

    if (search) {
      sortedProducts = sortedProducts.filter((item) =>
        item.productName.toLowerCase().includes(search)
      );
    }

    return sortedProducts;
  }

  return (
    <ul className="card">
      {transformProducts().map((item) => (
        <SingleProduct item={item} key={item.id} />
      ))}
    </ul>
  );
}

export default Cart;
