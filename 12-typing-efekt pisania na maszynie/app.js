const spanTxt = document.querySelector('.text');
const txt = 'Fugiat occaecat adipisicing nostrud nostrud minim in laborum veniam ea elit. Culpa ad sint elit laboris Lorem ullamco magna quis officia tempor ut. Dolor sint veniam nostrud dolore sint. Minim officia velit Lorem dolor. Reprehenderit consequat consequat nulla irure cupidatat sunt aliquip qui sint quis veniam nostrud ipsum.'
let txtIndex = 0;
const time = 40;
function typeLetter() {
    spanTxt.textContent += txt[txtIndex];
    txtIndex++;
    if(txtIndex === txt.length) clearInterval(typingTime);
};
const typingTime = setInterval(typeLetter, time);