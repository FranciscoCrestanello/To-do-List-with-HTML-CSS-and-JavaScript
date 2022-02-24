let taskName, taskDescription, taskValue;

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
        alert("tarea agregada.");
        // alert(
        //     `Tarea agregada con:
        //     - Task name: ${taskName}
        //     - Task description: ${taskDescription}
        //     - Task value: ${taskValue}`
        // );
    }
    return;
}
validateData = (name, description, taskValue) => {
    if(name == '' || description == '' || taskValue == '0') return false;
    return true;
}
createTask = (name, description, taskValue) => {
    let newTask = document.createElement("p");
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
    let nameTask = `${name} + ${description} + ${taskValue} `;
    newTask.appendChild(nameTask);

    return;
}