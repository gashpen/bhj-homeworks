const poleHole = document.querySelectorAll('.hole');
const poleKill = document.querySelector('#dead');
const poleMissing = document.querySelector('#lost');

for( let i = 0; i < poleHole.length; i++ ){
    poleHole[i].onclick = function(){
        if(poleHole[i] === "hole hole_has-mole"){
            alert("12")
        }
    }
  }

  

