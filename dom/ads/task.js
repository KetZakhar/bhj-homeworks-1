const rotators = document.querySelectorAll(".rotator");

for (const rotator of rotators) {
    const rotatorVariants = rotator.children;
    setInterval(() =>{
        rotateVariantFunc(rotatorVariants);
    }, 1000);
}
function rotateVariantFunc(rotatorVariants) {
    for (const rotatorVariant of rotatorVariants) {
        if (rotatorVariant.classList.contains("rotator__case_active")) {
          const currentVariant = Array.from(rotatorVariants).findIndex(element => element.classList.contains("rotator__case_active"));
          let nextVariant = currentVariant + 1;
          if (nextVariant > rotatorVariants.length) {
            nextVariant = 0;
              }
              rotatorVariant.classList.remove("rotator__case_active");
          rotatorVariants[nextVariant].classList.add("rotator__case_active");
          break;
        }
    }
  }