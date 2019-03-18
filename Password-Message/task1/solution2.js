const input = document.querySelector("input");
const div = document.querySelector('div');
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"];
passwords.forEach((item, index) => {
    passwords[index] = item.toLowerCase();
    console.log(passwords[index]);
})
const showMessage = (e) => {
    const text = e.target.value;
    div.textContent = '';
    passwords.forEach((item, i) => {
        if(item === text.toLowerCase()) {
            div.textContent = messages[i];
        } 
    })
};
input.addEventListener("input", showMessage)
