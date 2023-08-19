// import { useProduct } from "../context/ProductContext";
import { useSelector } from "react-redux";
import "./AddToCart.css";
import AddToCartItem from "./AddToCartItem";

function AddToCart() {
  // const { cart } = useProduct();
  const cart = useSelector((store) => store.product.cart);

  return (
    <ul className="product-container">
      {cart.length > 0 ? (
        cart.map((item) => <AddToCartItem item={item} key={item.id} />)
      ) : (
        <div>The Cart is Empty</div>
      )}
    </ul>
  );
}

export default AddToCart;
