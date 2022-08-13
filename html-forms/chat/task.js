const chatWidgetSide = document.querySelector(".chat-widget__side");
const chatWidget = document.querySelector(".chat-widget");
const chatWidgetInput = document.getElementById("chat-widget__input");
const chatWidgetMessages = document.querySelector(".chat-widget__messages");

let randomMess = [
    "Вы не купили ни одного товара для того, чтобы так с нами разговаривать!",
    "Добрый день! До свидания!", 
    "Кто тут?", 
    "Где ваша совесть?",
    "Мы ничего не будем вам продавать",
    "К сожалению, все операторы сейчас заняты. Не пишите нам больше"
];

let showRandomMess = function() {
    return randomMess[Math.round(Math.random())*(randomMess.length - 1)]; 
};

chatWidgetSide.addEventListener("click", function() {
    chatWidget.classList.add("chat-widget_active");
});

let addMessage = function(message, type) {
    let date = new Date().toLocaleDateString().substring(0,5);
    let template = `
    <div class = "message ${type}">
    <div class="message__time">${date}</div>
    <div class="message__text">${message}</div>
    </div>
    `;

    chatWidgetMessages.innerHTML += template;
};

chatWidgetInput.addEventListener("keypress", function(e){
    if((e.key === "Enter") && (chatWidgetInput.value)) {
        addMessage(chatWidgetInput.value, "message_client");
        chatWidgetInput.value = null;
        addMessage(showRandomMess(), "");
    }
});