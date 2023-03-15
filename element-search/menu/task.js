const menuLink = document.querySelectorAll(".menu__link");
//const menuItem = document.querySelectorAll(".menu__item");
const menuSub = document.querySelector("menu_sub")

menuLink.forEach((element)=>{
    element.addEventListener("click",function(event){
        let menuItem = this.closest(".menu__item");
        let menuSub = menuItem.querySelector(".menu_sub");
        menuSub.classList.toggle("menu_active");
        event.preventDefault();
        menuLink.forEach(function(otherParents){
            if(otherParents !== event){
                otherParents.classList.remove("menu_active");
            }
        });
    });
});


