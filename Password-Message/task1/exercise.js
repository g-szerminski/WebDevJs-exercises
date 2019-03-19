const input = document.querySelector("input");
const div = document.querySelector('div');
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"];

const lowerCasePass = passwords.map(item => item.toLowerCase());

const showMessage = (e) => {
    const text = e.target.value.toLowerCase();
    lowerCasePass.forEach((item, i) => {
        if(item === text) {
            div.textContent = messages[i];
        }
    })
    
}

input.addEventListener('input', showMessage);
