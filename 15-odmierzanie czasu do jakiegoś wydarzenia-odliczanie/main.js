const spadD = document.querySelector('span.d');
const spadH = document.querySelector('span.h');
const spadM = document.querySelector('span.m');
const spadS = document.querySelector('span.s');


setInterval(() => {
    const nowTime = new Date().getTime();
    const endTime = new Date('2019-03-31 21:30:00').getTime();
    // const time = Math.floor((endTime - nowTime) / 1000); 
    const days = Math.floor((endTime / (1000 * 60 * 60 * 24)) - (nowTime / (1000 * 60 * 60 * 24)));
    let hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24);
        hours = hours < 10 ? `0${hours}` : hours;
    let minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);
        minutes = minutes < 10 ? '0' + minutes : minutes;
    let seconds = Math.floor((endTime / 1000 - nowTime / 1000) % 60);
        seconds = seconds < 10 ? '0' + seconds : seconds;

    spadD.textContent = days;
    spadH.textContent = hours;
    spadM.textContent = minutes;
    spadS.textContent = seconds;
}, 1000);