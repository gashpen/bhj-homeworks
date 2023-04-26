const btn = document.querySelector(".btn");
const signinForm = document.querySelector("#signin__form");
const signin = document.querySelector(".signin");
const welcome = document.querySelector(".welcome");
const welcomeUserId = welcome.querySelector("#user_id");
const buttonExit = document.createElement("button");
let successId;

if(localStorage.getItem("user_id")){
    let userId = localStorage.getItem("user_id");
    addWelcome(userId);
}

function addWelcome(successId){

    welcomeUserId.textContent = `${successId}`;
    signin.classList.remove("signin_active");
    welcome.classList.add("welcome_active");
}

signinForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    const formData = new FormData(signinForm);
    const xhr = new XMLHttpRequest();

    xhr.open("POST","https://students.netoservices.ru/nestjs-backend/auth");
    xhr.send(formData);

    xhr.addEventListener("readystatechange",()=>{
        
       
        let successAuth;

        if(xhr.readyState === xhr.DONE){
            const authObj = JSON.parse(xhr.responseText);
           successId = authObj["user_id"];
           successAuth = authObj["success"]
        }

        if(successId != undefined){
            addWelcome(successId);
            localStorage.setItem("user_id", successId);
        }

        if(successAuth === false){
            alert("Неверный логин/пароль!");
        }
    })
})

function addElement(){
   
    welcome.append(buttonExit);
    buttonExit.style.width = "100px";
    buttonExit.style.margin = "10px 0px 0px";
    buttonExit.textContent = "Выйти";
    
}

buttonExit.addEventListener("click",()=>{
    signin.classList.add("signin_active");
    welcome.classList.remove("welcome_active");
    signinForm.reset();
})

addElement();