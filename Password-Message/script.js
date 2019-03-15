const input = document.getElementById('pass');
const div = document.querySelector('div');
const passwords = ['user', 'wiosna'];
const messages = ['Wyjechałam na zawsze', 'piękna pora roku'];

input.addEventListener('input', (e) => {
   
});
input.addEventListener('focus', (e) => {
    e.target.classList.add('active');
    }
);
input.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
    }
);






 // // console.log(e.target.value);
    // //console.log(this.value);
    
    // if(password === e.target.value) {
    //     div.textContent = message;
    //     e.target.value = '';
    // } else {
    //     div.textContent = '';
    // }