
const hasTooltip = Array.from(document.getElementsByClassName("has-tooltip"));
hasTooltip.forEach(element => {

  element.insertAdjacentHTML("afterend", 
  `<div class="tooltip" style=""> ${element.getAttribute("title")} </div> 
  `);

  element.addEventListener("click", (e) => {
    const tooltips = document.querySelectorAll(".tooltip");
    const hasTooltipXY = e.target.getBoundingClientRect();
    tooltips.forEach(tooltip => {
      if (tooltip != element.nextElementSibling) {
        tooltip.classList.remove("tooltip_active");
      } else {
        element.nextElementSibling.classList.toggle("tooltip_active");
        tooltip.style.position = "absolute";
        tooltip.style.top = hasTooltipXY.bottom + pageYOffset + "px";
        tooltip.style.left = hasTooltipXY.left + "px";
      }
    });
    e.preventDefault();
  });
}); 