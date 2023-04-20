const form = document.querySelector("#form");
const progress = document.getElementById("progress");

form.addEventListener("submit",(e)=>{
    e.preventDefault()
     
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange",()=>{
        if(xhr.readyState === xhr.DONE){
            let xhrJson = JSON.parse(xhr.responseText)
            console.log(e) 
            
        }
    })

xhr.open("POST","https://students.netoservices.ru/nestjs-backend/upload");
const formData = new FormData(form);
xhr.send(formData)    
})


