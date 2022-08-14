const tasksInput = document.getElementById("task__input");
const taskAddButton = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");

taskAddButton.addEventListener("click", (e) => {
    e.preventDefault();
    const task = document.createElement("div");

    if (tasksInput.value != "") {
        task.classList.add("task");
        task.insertAdjacentHTML('beforeend', `
            <div class="task__title">
                ${tasksInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
            `);

       tasksList.appendChild(task);

       const taskRemoveButton = task.querySelector(".task__remove");

       taskRemoveButton.addEventListener("click", (e) => {
         task.remove()
       });

       tasksInput.value = "";

    } else {
        console.log("Поле не заполнено!")
    }
});