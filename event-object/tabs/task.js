let tab = document.querySelectorAll(".tab");
let tabActive = document.querySelector(".tab_active");
let tabContent = Array.from(document.querySelectorAll(".tab__content"))

let tabClicker = tab;
tabClicker = Array.from(tabClicker)
tabClicker.forEach((el)=>{
    el.addEventListener("click",function(){
        tabClicker.forEach((el)=>{
            el.classList.remove("tab_active");
        });
        el.classList.add("tab_active");
       if(tabClicker.findIndex(el => el.classList.contains("tab_active")) === 0){
            tabContent[1].classList.remove("tab__content_active");
            tabContent[2].classList.remove("tab__content_active");
            tabContent[0].classList.add("tab__content_active");
       };
       if(tabClicker.findIndex(el => el.classList.contains("tab_active")) === 1){
        tabContent[0].classList.remove("tab__content_active");
        tabContent[2].classList.remove("tab__content_active");
        tabContent[1].classList.add("tab__content_active");
       };
       if(tabClicker.findIndex(el => el.classList.contains("tab_active")) === 2){
        tabContent[0].classList.remove("tab__content_active");
        tabContent[1].classList.remove("tab__content_active");
        tabContent[2].classList.add("tab__content_active");
       };
    });
});

