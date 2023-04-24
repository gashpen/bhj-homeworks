const editor = document.querySelector("#editor");
const name = localStorage.getItem('value');
const cleanButton = document.querySelector(".button");

cleanButton.addEventListener("click",()=>{
    localStorage.removeItem("saveValue");
    editor.value = "";
})

if (localStorage.getItem('saveValue') !== null) {
    editor.value = localStorage.getItem('saveValue');
  }
editor.addEventListener("keyup",()=>{
    localStorage.setItem('saveValue',editor.value);
})
