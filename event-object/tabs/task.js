let tab = document.querySelectorAll(".tab");
let tabActive = document.querySelector(".tab_active")

let tabClicker = tab;
tabClicker = Array.from(tabClicker)
tabClicker.forEach((el)=>{
    el.addEventListener("click",function(){
        tabClicker.forEach((el)=>{
            el.classList.remove("tab_active");
        });
        el.classList.add("tab_active");
       let indexTab = tabClicker.findIndex(el => el.classList.contains("tab_active"))
       let tabContent = this.closest(".tabs").querySelectorAll(".tab__content");
    }); 
});

