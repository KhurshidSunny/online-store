const productInitialState = {
  products: [],
  cart: [],
  isShowModal: false,
  currentItem: {},
};

export default function productReducer(state = productInitialState, action) {
  let updatedProducts = [];
  switch (action.type) {
    case "products/loadProducts":
      return { ...state, products: action.payload };
    case "products/addToCart":
      updatedProducts = state.products.map((item) =>
        item.id === action.payload.id ? { ...item, add: true } : item
      );
      return {
        ...state,
        cart: [...state.cart, action.payload],
        products: updatedProducts,
        currentItem: action.payload,
      };
    case "products/removeFromCart":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        products: state.products.map((item) =>
          item.id === action.payload.id ? { ...item, add: false } : item
        ),
      };
    case "products/showCartModal":
      return {
        ...state,
        isShowModal: !state.isShowModal,
      };
    default:
      return state;
  }
}

// Action creators

export function loadProducts() {
  return async function (dispatch, state) {
    const res = await fetch(`http://localhost:3000/products`);
    const data = await res.json();
    dispatch({ type: "products/loadProducts", payload: data });
  };
}

export function addToCart(id, products) {
  const currentItem = products.find((item) => item.id === id);

  return {
    type: "products/addToCart",
    payload: currentItem,
  };
}

export function removeFromCart(id, cart) {
  const newCart = cart.find((item) => item.id === id);
  return {
    type: "products/removeFromCart",
    payload: newCart,
  };
}

export function showCartModal() {
  return {
    type: "products/showCartModal",
  };
}
