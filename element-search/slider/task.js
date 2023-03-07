let btnLeft = document.querySelector(".slider__arrow_prev");
let btnRight = document.querySelector(".slider__arrow_next");
let imgActive = document.querySelector(".slider__item_active");
let slide = document.querySelectorAll(".slider__item");


btnRight.onclick = function(){
    slide.forEach((elements)=> {
        elements.classList.add("slider__item_active")
    })
};

btnLeft.onclick = function(){
    slide.forEach((elements)=> {
        elements.classList.remove("slider__item_active")
    })
};

