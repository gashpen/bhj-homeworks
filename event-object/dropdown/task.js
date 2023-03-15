let dropdownValue = document.querySelector(".dropdown__value");

dropdownValue.addEventListener("click",function(){
    this.closest(".dropdown").querySelector(".dropdown__list").classList.add("dropdown__list_active");
});

let dropdownItem = document.querySelectorAll(".dropdown__item");

Array.from(dropdownItem).forEach((element)=>{
    element.addEventListener("click",function(event){
       let listElement = element.textContent;
       let Parentdropdown = this.closest(".dropdown__list").closest(".dropdown");
       Parentdropdown.querySelector(".dropdown__value").textContent = listElement;
       Parentdropdown.querySelector(".dropdown__list").classList.remove("dropdown__list_active");
       event.preventDefault();
    });
});

