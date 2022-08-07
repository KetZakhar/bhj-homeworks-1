

const lessTime = function(){
let timer = document.getElementById("timer");
timer.textContent--;
if (timer.textContent == 0){
        clearInterval(id);
        alert("Вы победили в конкурсе!");
          
        } 
    }

 let id = setInterval(lessTime, 1000);



    