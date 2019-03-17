// Projekt 5 - Zadanie dla Ciebie 
// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

const input = document.querySelector("input");
const div = document.querySelector('div');
const type = input.getAttribute('type');
const btn = document.querySelector('button');
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"];

const showMessage = (e) => {
    const text = e.target.value;
    div.textContent = '';
    passwords.forEach((item, i) => {
        if(text.toLowerCase() === item.toLowerCase()) {
            div.textContent = messages[i];
        } 
    })
};

const showPassword = () => {
    // debugger;
    if(type === 'password') {
        input.setAttribute('type', 'text');
        btn.textContent = 'ukryj hasło';  
    } else if(type === 'text') {
        input.setAttribute('type', 'password');
        btn.textContent = 'pokaż hasło'; 
    }
}
btn.addEventListener('click', showPassword);
input.addEventListener("input", showMessage)
console.log(type);