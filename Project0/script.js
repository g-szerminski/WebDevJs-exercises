// console.log('script');

// const h1 = document.querySelector('h1');
// h1.addEventListener('click', function () {
//     h1.textContent += '+';
// });

// const h1 = document.querySelectorAll('h1');
// h1.forEach(function(item) {
//     item.addEventListener('click', function () {
//        this.textContent += '+'; 
//     })
// });

// document.querySelectorAll('h1').forEach(function(item) {
//     item.addEventListener('click', function () {
//        this.textContent += '+'; 
//     })
// });

// const header = document.querySelectorAll('h1');
// for (let i = 0; i < header.length; i++) {
//     header[i].addEventListener('click', function () {
//         this.textContent += '+'; 
//      })
// }

// const h1 = document.querySelector('h1');
// const addText = function() {
//         this.textContent += ' :) ';
//         h1.classList.toggle('red');
// };
// h1.addEventListener('click', addText);

const items = document.querySelector('h1');

items.addEventListener('click', function addClassRed() {
        this.classList.toggle('red');
}
);


