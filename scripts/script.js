const toDoList = [];

displayTasks();

function displayTasks() {
    let listHTML = '';

    for (let index = 0; index < toDoList.length; index++) {
        const task = toDoList[index];
        
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
        
    }

    
    document.querySelector('.display-tasks').innerHTML = listHTML;
}

function addTask() {
    const inputTask = document.querySelector('.task');
    let task = inputTask.value;


    toDoList.push(task);
    console.log(toDoList);
    inputTask.value = '';

    displayTasks();
}
