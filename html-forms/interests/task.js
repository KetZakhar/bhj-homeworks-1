const checkboxes = Array.from(document.getElementsByClassName("interest__check"));


function checkMark(e) {
  const eventTarget = e.target;
  const ilCheckbox = Array.from(eventTarget.closest(".interest").querySelectorAll(".interest__check"));

  ilCheckbox.forEach(i => {
    if (i !== eventTarget) {
      i.checked = eventTarget.checked
    }
  });
}

checkboxes.forEach(i => i.addEventListener("change", checkMark));