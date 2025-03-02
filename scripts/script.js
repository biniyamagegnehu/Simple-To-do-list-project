const toDoList = [{}];

displayTasks();

function displayTasks() {
    let listHTML = '';

    for (let index = 0; index < toDoList.length; index++) {
        const taskObject = toDoList[index];
        const task = taskObject.task;
        const taskDate = taskObject.taskDate;

        listHTML += `
            <p>              
                ${task}
                ${taskDate}
                <button onclick="
                    toDoList.splice(${index},1);
                    displayTasks();
                ">
                    Remove
                </button>
            
            </p>
        `;
        
    }

    
    document.querySelector('.display-tasks').innerHTML = listHTML;
}

function addTask() {
    const inputTask = document.querySelector('.task');
    const inputDate = document.querySelector('.task-date');
    let task = inputTask.value;
    let taskDate = inputDate.value;

    toDoList.push({
        task:task,
        taskDate:taskDate
    });
    console.log(toDoList);
    inputTask.value = '';

    displayTasks();
}
