const div = document.querySelector('div');
let divX = 150;
let divY = 150;
let divActive = false;
let inDivX;
let inDivY;
div.style.top = divY + 'px';
div.style.left = `${divX}px`;


div.addEventListener('mousedown', (e)=>{
    div.style.backgroundColor = 'gray';
    // divActive = true;
    divActive = !divActive;
    inDivX = e.offsetX;
    inDivY = e.offsetY; 
    console.log('wcisnąłeś');
    console.log(inDivX, inDivY);
     
});
div.addEventListener('mousemove', (e)=>{
    if(divActive) {
        divX = e.clientX - inDivX;
        divY = e.clientY - inDivY;
        div.style.top = `${divY}px`;
        div.style.left = `${divX}px`;
    }
    console.log('ruszasz myszką');
});
div.addEventListener('mouseup', ()=>{
    div.style.backgroundColor = 'black';
    // divActive = false;
    divActive = !divActive; 
    console.log('puściłeś');
});
