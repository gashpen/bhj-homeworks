const form = document.querySelector("#form");
const progress = document.getElementById("progress");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
     
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange",()=>{
        if(xhr.readyState === xhr.DONE){
            JSON.parse(xhr.responseText);
        }
    })
    xhr.upload.addEventListener("progress",(e)=>{
        progress.value = (e.loaded / e.total);
        if(e.loaded === e.total){
            progress.value = 0;
        };
    });

xhr.open("POST","https://students.netoservices.ru/nestjs-backend/upload");
const formData = new FormData(form);
xhr.send(formData);
})


