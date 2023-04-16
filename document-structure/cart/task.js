const productQuantityControl = document.querySelectorAll(".product__quantity-control");
const productQuantityControlDec = document.querySelectorAll(".product__quantity-control_dec");
const productQuantityControlInc = document.querySelectorAll(".product__quantity-control_inc");
const cart = document.querySelector(".cart__products");


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

        const cartContent = Array.from(cart.getElementsByClassName("cart__product"));

        for (let element of cartContent) {
            if (element.dataset.id == elem.closest(".product").dataset.id) {
                const value = Number(element.querySelector(".cart__product-count").textContent);
                const plusValue = Number(elem.closest(".product").querySelector(".product__quantity-value").textContent.trim());
                element.querySelector(".cart__product-count").textContent = value + plusValue;
            return;
            };
        };

        const product = elem.closest(".product");
        const productQuantityValue = product.querySelector(".product__quantity-value").textContent.trim();
        cart.insertAdjacentHTML("beforeend", 
            `<div class="cart__product" data-id="${product.dataset.id}">
                <img class="cart__product-image" src="${product.querySelector(".product__image").getAttribute("src")}">
                <div class="cart__product-count">${productQuantityValue}</div>
            </div>`);
    });
}) 


