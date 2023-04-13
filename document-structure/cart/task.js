const productQuantityControl = document.querySelectorAll(".product__quantity-control");
const productQuantityValue = document.querySelectorAll(".product__quantity-value");
const productQuantityControlDec = document.querySelectorAll(".product__quantity-control_dec");
const productQuantityControlInc = document.querySelectorAll(".product__quantity-control_inc");
const productAdd = document.querySelectorAll(".product__add");
const cartProducts = document.querySelector(".cart__products");

let cart = {
    caviar: {
        name :1,
        id:1,
        count: 1
    },
    cook:  {
        name :1,
        id:2,
        count: 1
    },
    fish: {
        name :1,
        id:3,
        count: 1
    },
    crab:  {
        name :1,
        id: 4,
        count : 1
    }
};

function cartInc(name){
    cart[name]["name"]+=1;
    cart[name]["count"]+=1;
}
function cartDec(name){
    console.log(cart[name]["name"])
    if(cart[name]["name"] - 1 == 0){
        return true;
    }
    cart[name]["name"]--;
}


productQuantityControl.forEach((element)=>{
    element.addEventListener("click",()=>{
       if(element.classList.contains("product__quantity-control_dec")){
            cartDec(element.dataset.name);
            element.closest(".product__quantity-controls").querySelector(".product__quantity-value").textContent = cart[element.dataset.name]["name"]
       }

       if(element.classList.contains("product__quantity-control_inc")){
            cartInc(element.dataset.name);
            element.closest(".product__quantity-controls").querySelector(".product__quantity-value").textContent = cart[element.dataset.name]["name"]
       }
    })
    
})

Array.from(productAdd).forEach((element)=>{
element.addEventListener("click",(e)=>{

        cartProducts.innerHTML+=`
        <div class="cart__product" data-id="${element.closest(".product").dataset.id}">
        <img class="cart__product-image" src=${element.closest(".product").querySelector(".product__image").src}>
                <div class="cart__product-count">${element.closest(".product__quantity").querySelector(".product__quantity-value").textContent}</div>
            </div>
        `
       
    })
})


