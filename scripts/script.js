const toDoList = [];

function addTask() {
    const inputTask = document.querySelector('input');
    const task = inputTask.value;

    toDoList.push(task);
    document.querySelector('p').innerHTML = toDoList.join('<br>');
}


