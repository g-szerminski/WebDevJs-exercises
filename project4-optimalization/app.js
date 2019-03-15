const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const red = x/innerWidth * 100;
    const green = y/innerHeight * 100;
    const blue = ((x/innerWidth * 100) + (y/innerHeight * 100))/2;
    h1.textContent = x + ', ' + y;
        if(blue < 15) {
            h1.style.color = 'white';
        } else {
            h1.style.color = 'black';
        }
    document.body.style.backgroundColor = `rgb(${red}%,${green}%,${blue}%)`;
    });

