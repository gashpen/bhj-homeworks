let tab = document.querySelectorAll(".tab");

tab = Array.from(tab).forEach((el)=>{
    el.addEventListener("click",function(){
        el.classList.add("tab_active");
        let a = this.closest(".tab__navigation").closest(".tabs").querySelector(".tab__content")
        a.classList.add("tab__content_active")
    })
})
