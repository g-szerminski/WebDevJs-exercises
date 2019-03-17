const input = document.getElementById('pass');
const div = document.querySelector('div');
const passwords = ['user', 'wiosna', 'Ania'];
const messages = ['Wyjechałam na zawsze', 'piękna pora roku', 'piękne oczy masz'];

input.addEventListener('input', (e) => {
   const text = e.target.value;
   div.textContent = '';
   passwords.forEach(function(item, index) {
        if(item === text) {
            div.textContent = messages[index];
            e.target.value = '';
            console.log(item, index);
        }
   })
   
});
input.addEventListener('focus', (e) => {
    e.target.classList.add('active');
    }
);
input.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
    }
);