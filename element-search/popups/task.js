const addModal = document.querySelector(".modal");
addModal.classList.toggle("modal_active");

const closeModal = document.querySelectorAll(".modal__close")
closeModal.forEach((element)=>{
    element.addEventListener("click",function(){
        let classBtn = this.closest(".modal");
        classBtn.classList.toggle("modal_active");
    })
})

const successModal = document.querySelector(".show-success");
successModal.addEventListener("click",function(){
   let successId = document.querySelector("#modal_success");
   successId.classList.toggle("modal_active")
})