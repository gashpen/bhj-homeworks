
const chatWidget = document.querySelector(".chat-widget");
const chatInput = document.querySelector(".chat-widget__input");
const messages = document.querySelector( '.chat-widget__messages' );
const messageClient = document.querySelector(".message_client");

var date = new Date;
var minutes =  date.getMinutes();
var hour = date.getHours();

function randomWords() {
  let arr = ["Здравствуй,брат","Не кипишуй","Давай как нибудь сам","Мне чет лень","Салам аллейкум, да ха!","Все пока!","!!!!","Давай до свидания", "Нет!","Да!"];
  for(let i = 0; i < arr.length;i++){
   return arr[Math.floor(Math.random() * 10)] 
  }
}

chatWidget.addEventListener("click",()=>{
    chatWidget.classList.add("chat-widget_active");
  })

  chatInput.addEventListener("keydown",function(e){
    if(e.keyCode === 13 && chatInput.value != "" && chatInput.value.trim()) {
       messages.innerHTML += `
  <div class="message_client">
    <div class="message__time">${hour+":"+minutes}</div>
    <div class="message__text">
     ${chatInput.value}
    </div>
  </div>
`;
setTimeout(()=>{
  messages.innerHTML += `
  <div class="message">
    <div class="message__time">${hour+":"+minutes}</div>
    <div class="message__text">
     ${randomWords()}
    </div>
  </div>
`;
},1000)
chatInput.value = "";
    }
})
