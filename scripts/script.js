const toDoList = [];

let task;

displayTasks();

function displayTasks() {
    let listHTML = '';

    toDoList.forEach(() => {
        const index = toDoList.indexOf(task);

        listHTML += `
            <p>
                ${task}
                <button onclick="
                    toDoList.splice(${index},1);
                    displayTasks();
                ">
                    Remove
                </button>
            </p>
        `;
    });
    
    document.querySelector('.display-tasks').innerHTML = listHTML;
}

function addTask() {
    const inputTask = document.querySelector('input');
    task = inputTask.value;

    toDoList.push(task);
    inputTask.value = '';

    displayTasks();
}


