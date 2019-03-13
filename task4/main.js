let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement('button');
    const ulList = document.createElement('ul');
    document.body.appendChild(btn);
    document.body.appendChild(ulList);
    btn.textContent = 'Stwórz listę';
    btn.addEventListener('click', createLiElements);
}

const createLiElements = () => {
    const ulList = document.querySelector('ul');
    for (let i = 1; i <= 10 ; i++) {
        const liElement = document.createElement('li');
        document.ulList.appendChild(liElement);
        orderElement++
    }
    
}

init()

