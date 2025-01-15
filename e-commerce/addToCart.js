import { getCartProductFromLocalStorage } from "./getCartProductsLocalStorage";
import { updatedCart } from "./updatedCart";

getCartProductFromLocalStorage();

export const addToCart = (event, id, stock) => {
  // console.log(event, id, stock);

  let arrLocalStorageProduct = getCartProductFromLocalStorage();
  console.log(getCartProductFromLocalStorage());

  const currProdEle = document.querySelector(`#cardValue${id}`);
  // console.log(currProdEle);

  let quantity = currProdEle.querySelector(`.quantity-number`).innerText;
  let price = currProdEle.querySelector(`.amount`).innerText;

  price = price.replace("₹", "");

  let existingProduct = arrLocalStorageProduct.find((currProd) => {
    return currProd.id === id;
  });

  console.log(existingProduct);

  // let check = existingProduct && quantity > 1;
  // console.log(check);

  if (existingProduct && quantity >= 1) {
    // debugger;
    // console.log(existingProduct);
    // console.log(quantity);

    quantity = Number(existingProduct.quantity) + Number(quantity);
    console.log(quantity);

    price = Number(price * quantity);

    console.log(price);

    // localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

    let updatedCart = { id, quantity, price };

    updatedCart = arrLocalStorageProduct.map((curProd) => {
      return curProd.id === id ? updatedCart : curProd;
    });

    console.log(updatedCart);

    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
  }

  if (existingProduct) {
    return false;
  }

  // console.log(price);
  price = Number(price);
  quantity = Number(quantity);
  // console.log(typeof price);
  price = Number(price * quantity);

  // console.log(arrLocalStorageProduct);

  arrLocalStorageProduct.push({ id, quantity, price });
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  let updateValue = updatedCart(arrLocalStorageProduct);
  console.log(updateValue);
};
