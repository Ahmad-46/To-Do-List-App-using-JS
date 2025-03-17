function addTask() {
    const taskText = document.getElementById('new-task').value.trim();
if (taskText === '') {
    alert('please enter a task');
    return;
}

const todoList = document.getElementById('todo-list');

const li = document.createElement('li');
li.className = 'todo-item';
const taskSpan = document.createElement('span');
taskSpan.textContent = taskText;

const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Delete';
deleteBtn.className = 'delete-btn';
deleteBtn.onclick = function() {
    todoList.removeChild(li);
};

taskSpan.onclick = function() {
    taskSpan.classList.toggle('completed');
};

li.appendChild(taskSpan);
li.appendChild(deleteBtn);
todoList.appendChild(li);

taskText,value = '';
}