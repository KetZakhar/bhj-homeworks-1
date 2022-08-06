
let time = timer.textContent;

const lessTime = function(){
const timer = document.getElementById("timer");
timer.textContent--;
if (time === 0){
        clearInterval(id);
        alert("Вы победили в конкурсе!");
          
        } 
    }

 let id = setInterval(lessTime, 1000);



    