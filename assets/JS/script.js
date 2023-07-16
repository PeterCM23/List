function addTask() {
    var input = document.getElementById('task-input');
    var task = input.value ;
    if(task.trim()!==''){
        var listItem = document.createElement('li');
        listItem.innerText = task;

        var taskList = document.getElementById('task-list');
        taskList.appendChild(listItem);

        input.value ='';
    }
}