const toDoList = [];
const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const itemsList = document.getElementsByClassName('task');

const deleteTask = (e) => {
    // e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    taskNumber.textContent = itemsList.length;
    renderList();
}

const addTask = (e) => {
    e.preventDefault();
    const taskTitle = input.value;
    if(taskTitle === '') return;
    const newTask = document.createElement('li');
    newTask.className = 'task';
    newTask.innerHTML = taskTitle + '<button>Usuń</button>';
    toDoList.push(newTask);
    renderList();
    ul.appendChild(newTask);
    input.value = '';
    taskNumber.textContent = itemsList.length;
    newTask.querySelector('button').addEventListener('click', deleteTask);
}
const renderList =  () => {
    ul.textContent = '';
    toDoList.forEach((item, index) => {
        item.dataset.key = index;
        ul.appendChild(item);
    });
};
form.addEventListener('submit', addTask);