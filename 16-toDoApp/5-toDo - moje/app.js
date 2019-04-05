const inputForm = document.querySelector('.addPanel .input');
const input = document.querySelector('#addInput');

const searchInput = document.querySelector('input#searchInput');
const addBtn = document.querySelector('.addPanel .addBtn');
const ulAdd =   document.querySelector('.addUl');
const ulSearch =   document.querySelector('.searchUl');


const addTask = (e) => {
    e.preventDefault();
    taskTitle = input.value;
    if(taskTitle === '') return;
    const newTask = document.createElement('li');
    newTask.className = 'task';
    newTask.innerHTML = taskTitle + '<button class="delTask">Usuń</button>';
    ulAdd.appendChild(newTask);
    input.value = '';
};

inputForm.addEventListener('submit', addTask);