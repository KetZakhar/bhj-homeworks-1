const subscribeModal = document.getElementById("subscribe-modal");
const modalClose = document.querySelector(".modal__close");

modalClose.addEventListener("click", () => {
  document.cookie = "modal=close";
  subscribeModal.classList.remove("modal_active");
});

if (document.cookie.length == 0) {
    subscribeModal.classList.add("modal_active");
}