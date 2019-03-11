const btn = document.querySelector('button');
let counter = 1;
btn.addEventListener('click', function() {
        const element = document.createElement('li');
        element.textContent = counter;
        if(counter % 3 === 0) {
            element.classList.add('big');
            element.style.listStyleType = 'circle';
        }
        document.querySelector('ul').appendChild(element);
        counter +=2;
    }
);