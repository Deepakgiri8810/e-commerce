const cartValue=document.querySelector(".abc");
console.log(cartValue);


export const updatedCart=(updatedCart)=>{

  console.log(updatedCart);
return cartValue.innerHTML=`<a href=""><i class="fa-solid fa-cart-shopping"> </i>${updatedCart.length}</a>
`


  

}