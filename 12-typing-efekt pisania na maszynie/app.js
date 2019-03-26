const spanTxt = document.querySelector('.text');
const spanCursor = document.querySelector('.cursor');
const txt = 'Fugiat occaecat adipisicing nostrud nostrud minim in laborum veniam ea elit. Culpa ad sint elit laboris Lorem ullamco magna quis officia tempor ut.'
let txtIndex = 0;
const time = 40;
function typeLetter() {
    spanTxt.textContent += txt[txtIndex];
    txtIndex++;
    if(txtIndex === txt.length) clearInterval(typingTime);
};
const cursorAnimation = () => {
    spanCursor.classList.toggle('active');
};
const typingTime = setInterval(typeLetter, time);
setInterval(cursorAnimation, 400);