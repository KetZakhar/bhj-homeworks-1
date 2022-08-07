
const modalMain = Array.from(document.getElementById("modal_main"));
const modalSuccess = Array.from(document.getElementById("modal_success"));
const modalCloseElem = Array.from(document.querySelectorAll(".modal__close"));
const showSuccessBtn = document.querySelector(".show-success");
document.getElementById("modal_main").className = "modal modal_active";


modalCloseElem.forEach(function(item) {
    item.addEventListener('click', function(e) {
        const parentModal = this.closest('.modal');
        parentModal.classList.remove('modal_active');
    });
    
}); 


document.querySelector(".show-success").onclick = () => {
    document.getElementById("modal_main").className = "modal";
    document.getElementById("modal_success").className = "modal modal_active";    
};