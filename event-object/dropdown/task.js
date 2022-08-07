const dropdownValue = document.querySelectorAll(".dropdown__value");
const dropdownList = document.querySelectorAll(".dropdown__list");
const dropButton = document.getElementsByClassName("dropdown");

function dropDown() {
    if (dropButton[0].querySelector("ul").className === "dropdown__list dropdown__list_active") {
        dropButton[0].querySelector("ul").className = "dropdown__list";
    } else {
        dropButton[0].querySelector("ul").className = "dropdown__list dropdown__list_active";
    };
};

dropButton[0].addEventListener("click", dropDown);

dropdownList[0].onclick = (event) => {
    event.preventDefault();
    dropdownValue[0].textContent = event.target.innerText;
};