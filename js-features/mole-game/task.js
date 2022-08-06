
let killedMoles = 0;
let missedMoles = 0;

for (let i = 1; i < 10; i++) {
    const hole = getHole(i);
    hole.onclick = function () {
        if (hole.className.includes('hole_has-mole'))  {
            killedMoles++;
            document.getElementById('dead').textContent = killedMoles;}
            if (killedMoles === 10) {
                alert('Вы победили!'); 
        } else {
            missedMoles++;
            document.getElementById('lost').textContent = missedMoles;}
            if (missedMoles === 5) {
                alert('Вы проиграли!');   
        }

    };
}

function getHole(index) {
    return document.getElementById(`hole${index}`);
}


