export const  homeQuantityToggle=(event,id,stock)=>{
// console.log(event.target.className);
// console.log(id);
// console.log(stock);

console.log(id);

const currentCard=document.querySelector(`#cardValue${id}`)
console.log(currentCard);

const productQuantity=currentCard.querySelector(".quantity-number");
console.log(productQuantity);

let quantity=parseInt(productQuantity.getAttribute("data-quantity")) || 1
console.log(quantity);


if (event.target.className==="incriment-btn") { 

  if (quantity<stock) {

    quantity= quantity+1
    
  }

   else if (quantity===stock){
    quantity=stock
  }
  
}

if (event.target.className ==="decriment-btn") {
  if(quantity>1){
    quantity=quantity-1
  }
}

productQuantity.innerText=quantity;
productQuantity.setAttribute("data-quantity",quantity);

return quantity



}