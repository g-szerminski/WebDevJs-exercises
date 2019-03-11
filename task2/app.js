let size = 0;
let grow = true;
const divElement = document.createElement('div');
document.body.appendChild(divElement);
// document.body.appendChild(document.createElement('div'));
document.body.style.height = '10000px';
divElement.style.width = '100%';
divElement.style.position = 'fixed';
divElement.style.left = '0';
divElement.style.top = '0';
divElement.style.backgroundColor = 'green';
divElement.style.height = size + 'px';

const changeHeight = () => {   
    if(size > window.innerHeight/2){
        grow = false;
        // grow = !grow;
        divElement.style.backgroundColor = 'red';
    } else if (size <= 0) {
        grow = true;
        // grow = !grow;
        divElement.style.backgroundColor = 'green';
    };
    if(grow) {
        size += 5;   
    } else {
        size -= 5;
    }
    divElement.style.height = size + 'px';  
};
window.addEventListener('scroll', changeHeight);
