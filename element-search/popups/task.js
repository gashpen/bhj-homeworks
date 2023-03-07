let addModal = document.querySelector(".modal");
addModal.classList.add("modal_active");

const closeClick = document.querySelector(".modal__close");
closeClick.onclick = function(){
    addModal.classList.remove("modal_active");
}

const successButton = document.querySelector(".show-success");
successButton.onclick = function(){
    document.querySelector("#modal_success").style.display = 'flex';
}
