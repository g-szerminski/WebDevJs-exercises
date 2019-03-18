const input = document.querySelector("input");
const div = document.querySelector('div');
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"];

const LCPasswords = passwords.map(item => item.toLocaleLowerCase());
const showMessage = (e) => {
    const text = e.target.value.toLowerCase();
    for (let i = 0; i < LCPasswords.length; i++) {
        if(text === LCPasswords[i]) {
            div.innerHTML = messages[i];
        }
    }
    
};
input.addEventListener('input', showMessage);
