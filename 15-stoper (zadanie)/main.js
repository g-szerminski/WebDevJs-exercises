const btnStart = document.querySelector('button.main');
const btnReset = document.querySelector('button.reset');
const div = document.querySelector('.time div');

let time = 0;
let run = false;
let idInterval; 

const startPause = () => {
    if(run === false) {
        run = !run;
        btnStart.textContent = 'Pause';
        idInterval = setInterval(counting, 10);
    } else {
        run = !run;
        btnStart.textContent = 'Start';
        clearInterval(idInterval);
    }
}
const counting = () => {
    div.textContent = (time/100).toFixed(2);
    time++;
}
const reset = () => {
    clearInterval(idInterval);
    run = false;
    btnStart.textContent = 'Start';
    time = 0;
    div.textContent = time;
}

btnStart.addEventListener('click', startPause);
btnReset.addEventListener('click', reset);