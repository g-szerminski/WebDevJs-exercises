const btn = document.querySelector('button');
element = document.querySelectorAll('li');
//element = document.getElementsByTagName('li');
//dla forEach trzeba z tak pobranych elementów zrobić tablicę
//element = [...document.getElementsByTagName('li')];
let fontGrow = 10;

//FOREACH
const chengeSize = () => {
  element.forEach(item => {
    if (item.style.display === '') {
      item.style.display = 'block';
      console.log('blok');
    }
    // item.style.fontSize = fontGrow + 'px';
    item.style.fontSize = `${fontGrow}px`;
  });
  fontGrow++
}


//FOR LOOP
// const chengeSize = () => {
//     for (let i = 0; i < element.length; i++) {
//         // if(element[i].style.display === '') {
//         if(!element[i].style.display) {    
//             element[i].style.display = 'block';
//         }
//         element[i].style.fontSize = fontGrow + 'px';
//     }
//     fontGrow++;
// }

btn.addEventListener('click', chengeSize);
