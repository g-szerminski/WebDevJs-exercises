const input = document.getElementById('pass');
const div = document.querySelector('div');
const password = 'user';
const message = 'celek precelek'

input.addEventListener('input', (e) => {
   if(password === e.target.value) {
        div.textContent = message;
        e.target.value = '';
    } else {
        div.textContent = '';
    }
});
input.addEventListener('focus', (e) => {
    e.target.classList.add('active');
    }
);
input.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
    }
);

// console.log(e.target.value);
//console.log(this.value);
    