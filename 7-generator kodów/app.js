const characters = 'ABCDEFGHIJKLMNOPRSTUWXYZ0123456789';
const btn = document.querySelector('button');
const section = document.querySelector('section');

const codesQuantity = 1000;
const charactersQuantity = 10;

const codeGenerator = () => {
    for (let i = 0; i < codesQuantity; i++) {
        let code = '';
        for (let i = 0; i < charactersQuantity ; i++) {
            const index = Math.floor(Math.random() * characters.length);
            code += characters[index];
            
        }
        const div = document.createElement('div');
        div.textContent = code;
        section.appendChild(div);
    }
};
btn.addEventListener('click', codeGenerator);