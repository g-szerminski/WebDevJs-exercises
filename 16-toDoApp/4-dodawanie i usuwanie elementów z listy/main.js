const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
// const itemsList = document.querySelectorAll('li.task'); tutaj nie można tego pobrać, bo na tym etapie jest to jeszcze pusta wartość !
itemsList = document.getElementsByClassName('task');

const deleteTask = (e) => {
    e.target.parentNode.remove();
    taskNumber.textContent = itemsList.length;
}

const addTask = (e) => {
    e.preventDefault();
    const taskTitle = input.value;
    if(taskTitle === '') return;
    const newTask = document.createElement('li');
    newTask.className = 'task';

    newTask.innerHTML = taskTitle + '<button>Usuń</button>';
    // newTask.textContent = taskTitle; zamiast tego to kod z 20 linii

    ul.appendChild(newTask);
    input.value = '';
    // tutaj dopiero pobieramy wszystkie li
    // const itemsList = document.querySelectorAll('li.task'); 
    // const liQuantity = itemsList.length;
    // taskNumber.textContent = liQuantity;
    taskNumber.textContent = itemsList.length;
    newTask.querySelector('button').addEventListener('click', deleteTask);
}
form.addEventListener('submit', addTask);