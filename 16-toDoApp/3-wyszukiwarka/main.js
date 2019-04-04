const input = document.querySelector('input');
const ul = document.querySelector('ul');
const liElements = document.querySelectorAll('li');

const searchTask = (e)=> {
    const searchText = e.target.value.toLowerCase();
    let tasks = [...liElements];
    tasks = tasks.filter(item => item.textContent.toLowerCase().includes(searchText));
    ul.textContent = '';
    tasks.forEach(item => ul.appendChild(item));
    console.log(tasks);
    
}
input.addEventListener('input', searchTask);