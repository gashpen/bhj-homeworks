const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");


function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  //document.cookie = "modal=modal_active";

  if(getCookie("modal") === "modal_active"){
    modal.classList.add("modal_active");
  }

  modalClose.addEventListener("click",()=>{
    modal.classList.remove("modal_active");
    document.cookie = `modal=modal_active;max-age=-1`;
  })
