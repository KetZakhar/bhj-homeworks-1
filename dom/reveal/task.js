const reveals = document.querySelectorAll(".reveal");

for(let reveal of reveals) {
    window.addEventListener("scroll", function() {
        const {top, bottom} = reveal.getBoundingClientRect();
        if ((bottom < 0) || (top >  window.innerHeight)) {
            reveal.classList.remove("reveal_active")
        }   else {
            reveal.classList.add("reveal_active"); 
        }
    } 
    )
}
