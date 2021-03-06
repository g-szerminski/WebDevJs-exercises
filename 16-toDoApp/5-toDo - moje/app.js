const inputForm = document.querySelector('.addPanel .input');
const input = document.querySelector('#addInput');
const searchInput = document.querySelector('input#searchInput');
const ulAdd = document.querySelector('.addUl');
const ulSearch = document.querySelector('.searchUl');
const taskQuantity = document.querySelector('h2 span');
const taskList = document.getElementsByClassName('task');

const delTask = (e) => {
    e.target.parentNode.remove();
    taskQuantity.textContent = taskList.length;
};

const addTask = (e) => {
    e.preventDefault();
    taskTitle = input.value;
    if(taskTitle === '') return;
    const newTask = document.createElement('li');
    newTask.className = 'task';
    newTask.innerHTML = taskTitle + '<button class="delTask">Usuń</button>';
    ulAdd.appendChild(newTask);
    input.value = '';
    taskQuantity.textContent = taskList.length; 
    newTask.querySelector('button').addEventListener('click', delTask);
    inputForm.setAttribute('autocomplete', 'off');
};

const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    let tasks = [...taskList];
    tasks.filter(item => item.textContent.toLowerCase().includes(searchText));
    ulSearch.textContent = '';
    tasks.forEach(li => ulSearch.appendChild(li));
}
inputForm.addEventListener('submit', addTask);
searchInput.addEventListener('input', searchTask);