let time = 86400;
const countDown = document.getElementById("timer");

setInterval(updateCountDown, 1000);

function updateCountDown(){
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 1440);
    let seconds = time % 60;
    if(seconds <= 9){
        seconds = "0" + seconds
    }
    if(seconds == 00){
        alert("Вы победиил в конкурсе!")
    }
    countDown.textContent = `${hours}:${minutes}:${seconds}`;
    time--
}