const pollTitle = document.querySelector(".poll__title");
const pollAnswer = document.querySelectorAll(".poll__answer");
const pollAnswerParent = document.querySelector(".poll__answers");

let xhrPoll = new XMLHttpRequest();

xhrPoll.addEventListener("readystatechange",()=>{

    if(xhrPoll.readyState === xhrPoll.DONE){

        pollObj = JSON.parse(xhrPoll.responseText);
        pollTitle.textContent = pollObj["data"]["title"];
        let answersArr = pollObj["data"]["answers"];

        answersArr.forEach((element)=>{
            pollAnswerParent.innerHTML += `
            <button class="poll__answer">
                 ${element}
            </button>
        `
        });
    };
});

xhrPoll.open("GET","https://students.netoservices.ru/nestjs-backend/poll");
xhrPoll.send();

document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("poll__answer"));
        alert("«Спасибо, ваш голос засчитан!»");
})

