let request = new XMLHttpRequest();
request.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
request.send();

let pollAnswer = document.getElementById("poll__answers");
let pollTitle = document.getElementById("poll__title");
console.log(pollTitle);
console.log(pollAnswer);

request.addEventListener("readystatechange", function () {
  if (this.readyState == request.DONE && this.status == 200) {
    console.log("Ok");
    let pollElement = JSON.parse(this.responseText);
    let question = pollElement.data.title;
    let answers = pollElement.data.answers;
    console.log(answers);
    
    pollTitle.innerHTML += question;
    
    for (let answer of answers) {
      pollAnswer.innerHTML += `
        <button class="poll__answer">
          ${answer}
        </button>`;
    }
    
    let Buttons = document.getElementsByTagName("button");
    console.log(Buttons);
    
    for (let button of Buttons) {
      button.addEventListener("click", () => {
        alert("Спасибо, ваш голос засчитан!");
      })
    }
    
  }
})