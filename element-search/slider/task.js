let btnLeft = document.querySelector(".slider__arrow_prev");
let btnRight = document.querySelector(".slider__arrow_next");
let allSlide = document.querySelectorAll(".slider__item");
let allSlideArr = Array.from(allSlide);

btnRight.addEventListener("click",function (){
    let index = allSlideArr.findIndex(el => el.classList.contains("slider__item_active"));
    allSlide[index].classList.remove("slider__item_active");
    let nextSlideIndex = index === allSlide.length - 1 ? 0 : index + 1;
    allSlide[nextSlideIndex].classList.add("slider__item_active")
    
})
btnLeft.addEventListener("click",function (){
    let index = allSlideArr.findIndex(el => el.classList.contains("slider__item_active"));
    allSlide[index].classList.remove("slider__item_active");
    let prevSlideIndex = index === 0 ? allSlide.length - 1 : index - 1;
    allSlide[prevSlideIndex].classList.add("slider__item_active");
    
})
