let menuSub = document.querySelector(".menu_sub");
let menuLink = document.querySelectorAll('.menu__link');
let menuParent = document.querySelector(".menu__item")

let containsEl = menuParent.contains(menuSub);
let menuLinkArr = Array.from(menuLink);
 menuLinkArr.slice(1,2).concat(menuLinkArr.slice(5,6)).forEach((element) => {
    element.onclick = function(){
       let q =  menuSub.closest(".menu_sub");
       q.classList.toggle("menu_active");
       return false;
    }
});
