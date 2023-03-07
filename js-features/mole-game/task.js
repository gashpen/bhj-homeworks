const deadPole = document.getElementById('dead');
const lostPole = document.getElementById('lost')
let killCount = 0;
let lostCount = 0;

function getHole(i) {
  let hole = document.getElementById(`hole${i}`);
  hole.onclick = function() {
    if (hole.className.includes('hole_has-mole')) {
        killCount++;
    } else {
      lostCount++;
    }
    if (killCount === 10) {
      lostCount = 0;
      killCount = 0;
      alert('Победа!');
    }
    if (lostCount === 5) {
      lostCount = 0;
      killCount = 0;
      alert('Поражение!');
    }
    lostPole.textContent = lostCount;
    deadPole.textContent = killCount;
  }
}
for (let i = 1; i <= 9; i++){
  getHole(i);
}


