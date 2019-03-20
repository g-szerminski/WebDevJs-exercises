const names = [];
const div = document.querySelector('div');

const addName = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const newName = input.value;
    if(input.value) {
        for(item of names) {
            if(item === newName) {
                alert('to już jest !!!');
                input.value = '';
                return
            }
        }
    names.push(newName);
    div.textContent += newName + ', ';
    input.value = '';
    }
}
document.querySelector('button').addEventListener('click', addName);