const cookie = document.getElementById("cookie");
const count = document.getElementById("clicker__counter");
 
function clickDown(){
    cookie.width = "200";
}

cookie.onclick = function(){
    cookie.width = "250";
    setTimeout(clickDown,100);
    clickCounter();
}
function clickCounter(){
    count.textContent++
}

