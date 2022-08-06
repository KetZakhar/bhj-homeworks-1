
let cookie = document.getElementById("cookie");

cookie.onclick = function(){
    if (cookie.width == 200) {
        cookie.width += 100;
    } else {
        cookie.width -= 100;
    }

 let clicker__counter = document.getElementById("clicker__counter");
 clicker__counter.textContent++;

}

