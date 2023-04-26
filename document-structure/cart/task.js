const productQuantityControl = document.querySelectorAll(".product__quantity-control");
const productQuantityControlDec = document.querySelectorAll(".product__quantity-control_dec");
const productQuantityControlInc = document.querySelectorAll(".product__quantity-control_inc");
const cart = document.querySelector(".cart__products");
const cartProducts = document.querySelectorAll(".cart__product");

productQuantityControl.forEach((element)=>{
    element.addEventListener("click",()=>{
    let productQuantityValue = element.closest(".product__quantity-controls").querySelector(".product__quantity-value")
         if(element.classList.contains("product__quantity-control_inc") && productQuantityValue != 1){
            productQuantityValue.textContent++
         }
         if(element.classList.contains("product__quantity-control_dec") && productQuantityValue != 1){
            productQuantityValue.textContent--
        }
        if(productQuantityValue.textContent <= 0){
            productQuantityValue.textContent = 1
        }
    })
})

const productAdd = document.querySelectorAll(".product__add");

productAdd.forEach((elem)=>{
    elem.addEventListener("click", () => {
        
        const product = elem.closest(".product");
        const productQuantityValue = product.querySelector(".product__quantity-value").textContent.trim();
        let cards = elem.closest("body").querySelectorAll(".cart__product");                                                                                                                                                                                                                               
        const productInCard = Array.from(cards).find(el => el.dataset.id === product.dataset.id);
        if(productInCard) {
            console.log(productInCard)
            const countElement = productInCard.querySelector(".cart__product-count");
            countElement.textContent = Number(countElement.textContent) + Number(productQuantityValue);

        } else {
            cart.innerHTML +=`
            <div class="cart__product" data-id="${product.dataset.id}">
            <img class="cart__product-image" src="${product.querySelector(".product__image").getAttribute("src")}">
            <div class="cart__product-count">${productQuantityValue}</div>
            </div>`;
        }
        
    });
}) 


