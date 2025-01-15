import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.querySelector(".productContainer");
const productTemplate = document.querySelector(".productTemplate");

export const showHomeProduct = (product) => {
  if (!product) {
    return false;
  }

  product.forEach((currProd) => {
    const { brand, id, name, category, description, image, price, stock } =
      currProd;

    const productClone = document.importNode(productTemplate.content, true);
    // console.log(productClone);
    
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".product-img").src = image;
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".product-discription").textContent =
      description;
    productClone.querySelector(".amount").textContent = `₹${price}`;
    productClone.querySelector(".mrpAmount").textContent = `₹${price * 4}`;
    productClone.querySelector(".stock").textContent = stock;

    productClone
      .querySelector("#cardValue")
      .setAttribute("id", `cardValue${id}`);

    productClone
      .querySelector(".quality-btn")
      .addEventListener("click", (event) => {
        homeQuantityToggle(event, id, stock);
      });

    productClone
      .querySelector(".add-to-cart-btn")
      .addEventListener("click", (event) => {
        addToCart(event, id, stock);
      });
      // console.log(productClone);
      
    productContainer.prepend(productClone);
  });
};
