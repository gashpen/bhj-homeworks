const item = document.querySelector(".item");
const itemAll = document.querySelectorAll(".item");
const items = document.querySelector("#items");
const itemWrapper = document.querySelectorAll("item__wrapper");
const loader = document.querySelector(".loader ");

let xhrAllCurancy =  new XMLHttpRequest()

xhrAllCurancy.addEventListener("readystatechange",()=>{

    if(xhrAllCurancy.readyState === xhrAllCurancy.DONE){

        let allCurancyObj = JSON.parse(xhrAllCurancy.responseText); 

       const entries = Object.entries(allCurancyObj["response"]["Valute"]);

        entries.forEach((element)=>{
            item.innerHTML += `
            
            <div class ="item__wrapper">
            <div class="item__code">
                ${element[0]}
            </div>
            <div class="item__value">
                ${element[1]["Value"]}
            </div>
            <div class="item__currency">
                руб.
            </div>
            </div>
        `
        item.style = "flex-direction:column";
        loader.classList.remove("loader_active")
        })    
    }
})

xhrAllCurancy.open("GET","https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhrAllCurancy.send();
