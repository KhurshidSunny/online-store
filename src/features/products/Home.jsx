import "./Home.css";
import Header from "./Header";
import Filters from "../filters/Filters";
import Cart from "./Cart";
// import CustomDropdown from "./AddToCart";
import AddToCart from "./AddToCart";
import { useSelector } from "react-redux";

// import { useProduct } from "../context/ProductContext";

function Home() {
  // const { isShowModal } = useProduct();
  const isShowModal = useSelector((store) => store.product.isShowModal);

  return (
    <div className="main-layout">
      <Header />

      <div className="content">
        {isShowModal ? (
          <AddToCart />
        ) : (
          <>
            <Filters />

            <Cart />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
