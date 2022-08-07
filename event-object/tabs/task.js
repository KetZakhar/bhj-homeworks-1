const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab__content");

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", (event) => {

        let currentTab = event.target.parentElement.children;
        for (let e = 0; e < currentTab.length; e++) {
            currentTab[e].classList.remove("tab_active"); 
        };

        event.target.classList.add("tab_active");


        let currentContent = event.target.parentElement.nextElementSibling.children;
        for (let n = 0; n < currentContent.length; n++) {
            currentContent[n].classList.remove("tab__content_active"); 
        };

        contents[i].classList.add("tab__content_active"); 
    });
    
}