const square = document.createElement('div');
document.body.appendChild(square);
let size = 10;
let grow = true;
square.style.width = size + 'px';
square.style.height = size + 'px';

window.addEventListener('scroll', function() {
    if(size >= window.innerWidth/3) {
        grow = false;
    } else if(size <= 0) {
        grow = true;
    };

    if(grow) { //if(grow == true)
        size += 5;
        // size *= 5;
        square.style.width = size + 'px';
        square.style.height = size + 'px';
    } else {
        size -= 5;
        // size *= 5;
        square.style.width = size + 'px';
        square.style.height = size + 'px';
    };
    }
);

