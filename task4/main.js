let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement('button');
    const btnReset = document.createElement('button');
    const ul = document.createElement('ul');
    document.body.appendChild(btn);
    document.body.appendChild(btnReset);
    document.body.appendChild(ul);
    btn.textContent = 'Dodaj 10 elementów do listy';
    btnReset.textContent = 'Reset list';
    btn.style.fontSize = '28px';
    btnReset.style.fontSize = '28px';
    btn.addEventListener('click', createLiElements);
    btnReset.addEventListener('click', cleanList);
}

const createLiElements = () => {
    for (let i = 0; i < 10; i++) {
        const li = document.createElement('li');
        li.textContent = `Element nr ${orderElement++}`;
        // document.querySelector('ul').appendChild(li);
        li.style.fontSize = `${size++}px`
        const ulList = document.querySelector('ul');
        ulList.appendChild(li);
        // orderElement++;
    }
}

const cleanList = () => {
    document.querySelector('ul').textContent = '';
    size = 10;
    orderElement = 1;
}
init()