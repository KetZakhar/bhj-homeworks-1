
const arrowPrev = document.querySelector(".slider__arrow_prev");
const arrowNext = document.querySelector(".slider__arrow_next");

let sliderCount = 0;


const sliderImages = document.getElementsByClassName("slider__item");
let sliderItem = sliderImages.item(sliderCount);

function showSlides(n) {
    sliderItem = sliderImages.item(sliderCount + n);
    sliderItem.classList.remove("slider__item_active");
    sliderItem = sliderImages.item(sliderCount);
    sliderItem.classList.add("slider__item_active");
}

arrowNext.onclick = function() {
  if (sliderCount >= 0 && sliderCount < sliderImages.length - 1) {
    sliderCount++;
    showSlides(-1);
  } else {
    sliderCount = 0;
    sliderItem.classList.remove("slider__item_active");
    showSlides();
  }
};

arrowPrev.onclick = function() {
  if (sliderCount < sliderImages.length && sliderCount > 0) {
    sliderCount--;
    showSlides(1);
  } else {
    sliderCount = sliderImages.length - 1;
    sliderItem = sliderImages.item(0);
    showSlides();
  }
};