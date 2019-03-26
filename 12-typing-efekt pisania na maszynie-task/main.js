// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne
const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst 1', 'tekst 2', 'tekst 3'];
let textIndex = -15;
let arrayIndex = 0;

const addLetter = () => {
    if(textIndex >= 0) {
        spnText.textContent += txt[arrayIndex][textIndex];
    }
    textIndex++;
    if(textIndex === txt[arrayIndex].length) {
        arrayIndex++;
        if(arrayIndex === txt.length) return setTimeout(() => spnText.textContent = '', 2000); 
        return setTimeout(() => {
            textIndex = -15;
            spnText.textContent = '';
            addLetter();
        }, 2000);
    }
    setTimeout(addLetter, 100);
}
addLetter();

const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);