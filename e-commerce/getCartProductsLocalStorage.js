import { updatedCart } from "./updatedCart";

export const getCartProductFromLocalStorage = () => {
  let cartProduct = localStorage.getItem("cartProductLS");
  if (!cartProduct) {
    return [];
  }

  cartProduct = JSON.parse(cartProduct);
  updatedCart(cartProduct);

  return cartProduct;
};
