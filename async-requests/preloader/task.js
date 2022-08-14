const loader = document.getElementById("loader");

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
xhr.send();

xhr.addEventListener("readystatechange", () => {
    if(xhr.readyState === xhr.DONE) {

        let data = JSON.parse(xhr.responseText);
        data = data.response.Valute;

        const items = document.getElementById("items");
        Object.keys(data).forEach((key) => {
                const element = data[key];
                items.innerHTML += `
                <div class="item">
                    <div class="item__code">${key}</div>
                    <div class="item__value">${element.Value}</div>
                    <div class="item__currency">руб.</div>
                </div>
            `;
        });     
        
        loader.classList.remove("loader_active");
        console.log(data);
    }
});