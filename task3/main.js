const btn = document.querySelector('button');
element = document.querySelector('li');
let fontGrow = 10;

const chengeSize = () => {
    debugger;
    if( element.style.display = 'none') {
        element.style.display = 'block'
    } else {
        element.style.fontSize = fontGrow + 'px';
        fontGrow +=1; 
        console.log('działa');
        
    }
}

btn.addEventListener('click', chengeSize);