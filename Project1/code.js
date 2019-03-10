const btn = document.querySelector('button');
let number = 1;
let activeNumber = 1;
const addSquare = function() {
    const div = document.createElement('div');
    div.textContent = number;
    // if(number % 5 === 0) {
    //     div.classList.add('circle');
    // };
    if(activeNumber == 5) {
        div.classList.add('circle');
        activeNumber = 0;
    }
    document.body.appendChild(div);
    number ++;
    activeNumber++;
}
btn.addEventListener('click', addSquare);








// function show(...items) {
//     console.log(items);
//     console.log(arguments);
    
// };

// show(2, 'dfds', true, 3442, 3552)

// window.addEventListener('keydown', function(event) {
//     var key = event.keyCode;
//     alert(key);
//     alert(String.fromCharCode(key));
// }, false);