export async function getAllTasks() {

    const response = await fetch('http://localhost:8080/api/tasks');
    return await response.json();
}

export async function createTask() {
    if (document.getElementById("newTask").value != ""){
        var taskList = 1;
        var name = document.getElementById("newTask").value;
        var isChecked = false;
        var task = {'taskList': taskList, 'name': name, 'isChecked': isChecked};
        console.log(task);
        const response = await fetch('http://localhost:8080/api/tasks', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(task),
        })
        return await response;
    } else {
        return false;
    }
}

export async function updateChecked(task) {
    const response = await fetch('http://localhost:8080/api/tasks/checkTask', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(task),
    })
    return await response;
}

export async function submitTask(task) {
    const response = await fetch('http://localhost:8080/api/tasks/editTask', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(task),
    })
    return await response;
}

export async function deleteTask(task) {
    const response = await fetch('http://localhost:8080/api/tasks/deleteTask', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(task),
    })
    return await response;
}

