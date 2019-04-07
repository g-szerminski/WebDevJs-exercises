const inputForm = document.querySelector('.addPanel .input');
const input = document.querySelector('#addInput');
const searchInput = document.querySelector('input#searchInput');
// const addBtn = document.querySelector('.addPanel .addBtn');
const ulAdd = document.querySelector('.addUl');
const ulSearch = document.querySelector('.searchUl');
const taskQuantity = document.querySelector('h2 span');
 const taskList = document.getElementsByClassName('task');
// const taskList = document.querySelectorAll('.task');

const delTask = (e) => {
    e.target.parentNode.remove();
    taskQuantity.textContent = taskList.length;
    // taskQuantity.textContent = document.querySelectorAll('.task').length;
}

const addTask = (e) => {
    e.preventDefault();
    taskTitle = input.value;
    if(taskTitle === '') return;
    const newTask = document.createElement('li');
    newTask.className = 'task';
    newTask.innerHTML = taskTitle + '<button class="delTask">Usuń</button>';
    ulAdd.appendChild(newTask);
    input.value = '';
    // const liList = document.querySelectorAll('.task').length;
    // taskQuantity.textContent = liList;
    taskQuantity.textContent = taskList.length; 
    // jak zadeklarujemy zmienną w zasięgu globalnym to trzeba to zrobić w ten sopsób, bo qsa nie jest updatowany na bieżąco
    newTask.querySelector('button').addEventListener('click', delTask);
    inputForm.setAttribute('autocomplete', 'off');
};

const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    let tasks = [...taskList];
    tasks.filter(item => item.textContent.toLowerCase().includes(searchText));
    ulSearch.textContent = '';
    tasks.forEach(li => ulSearch.appendChild(li));
    console.log(tasks);
}
inputForm.addEventListener('submit', addTask);
searchInput.addEventListener('input', searchTask);