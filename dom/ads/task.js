const rotatorCase = document.querySelectorAll(".rotator__case");
const rotator = document.querySelector(".rotator");

let arrChild = Array.from(rotator.children);

let counter = 0;

setInterval(()=>{
   counter+=1
   arrChild[counter - 1].classList.remove("rotator__case_active");
    if(counter == 6){
        counter = 0;
    }
    arrChild[counter].classList.add("rotator__case_active");
},1000);