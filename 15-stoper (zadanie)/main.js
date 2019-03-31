// http://websamuraj.pl/examples/js/projekt11/
const btnStart = document.querySelector('button.main');
const btnReset = document.querySelector('button.reset');
const div = document.querySelector('.time div');
let counter = 0;

const count = () => {
    if(counter === 0) {
        div.textContent = counter;
        counter++;
    } else if(!counter === 0){
        counter++;
        div.textContent = counter;
    }   
}

btnStart.addEventListener('click', ()=> {
    setInterval(count, 100);
})
btnReset.addEventListener('click', ()=> {
})