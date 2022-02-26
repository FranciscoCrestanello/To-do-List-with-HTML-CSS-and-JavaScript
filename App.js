let taskName, taskDescription, taskValue;

const cancelReloadForm = document.getElementById("form"); // with these lines I prevent to reload the web page
cancelReloadForm.addEventListener("submit", function() {
    event.preventDefault();
});

addTask = () => {
    taskName = document.getElementById("TaskName").value;
    taskDescription = document.getElementById("TaskDescription").value;
    taskValue = document.getElementById("TaskImportanceLevel").value;
    
    if(!validateData(taskName, taskDescription, taskValue)){
        alert(
            `Something has gone wrong. Plese try again.
            remember these rules: 
                - Your task needs to have a name.
                - Your task needs to have a description
                - Your task needs to have an importance level.`
        )
        return;
    }
    else{
        createTask(taskName, taskDescription, taskValue);
        cleanInputs();
        //alert("tarea agregada.");
    }
    return;
}
validateData = (name, description, taskValue) => {
    if(name == '' || description == '' || taskValue == '0') return false;
    return true;
}
createTask = (name, description, taskValue) => {
    switch(taskValue){
        case '1': taskValue = "Easy";
            break;
        case '2': taskValue = "Medium";
            break;
        case '3': taskValue = "Hard";
            break;
        default: alert("Something has gone wrong.");
            break;
    }

    let newTaskContainer = document.createElement("div");
    let newNameTask = document.createElement("p");
    let newDescriptionTask = document.createElement("p");
    let newValueTask = document.createElement("p");
    let newButtonDelete = document.createElement("button");
    newButtonDelete.onclick = function() {
        if(confirm(`Do you really want to delete this task?`) == true) newTaskContainer.remove();
        return;
    };
    
    let nameTask = document.createTextNode(name);
    let descriptionTask = document.createTextNode(description);
    let valueTask = document.createTextNode(taskValue);
    let buttonDelete = document.createTextNode("Delete");
    
    newNameTask.appendChild(nameTask);
    newDescriptionTask.appendChild(descriptionTask);
    newValueTask.appendChild(valueTask);
    newButtonDelete.appendChild(buttonDelete);

    newTaskContainer.appendChild(newNameTask);
    newTaskContainer.appendChild(newDescriptionTask);
    newTaskContainer.appendChild(newValueTask);
    newTaskContainer.appendChild(newButtonDelete);

    let element = document.getElementById("container__CreatedTasks");
    element.appendChild(newTaskContainer);
    return;
}

cleanInputs = () => {
    document.getElementById("TaskName").value = '';
    document.getElementById("TaskDescription").value = '';
    document.getElementById("TaskImportanceLevel").value = '0';
}