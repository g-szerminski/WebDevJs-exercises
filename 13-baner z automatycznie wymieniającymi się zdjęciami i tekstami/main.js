const slideList = [{
    img: 'images/img1.jpg',
    tekst: 'Pierwszy tekst'
},{
    img: 'images/img2.jpg',
    tekst: 'Drugi tekst'
},{
    img: 'images/img3.jpg',
    tekst: 'Trzeci tekst'
}];

const img = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];

const time = 3000;
let active = 0;
//-------------------------------------------------------------------------------------------
// ZMIANA AKTYWNEJ KROPKI ZA POMOCĄ METODY findIndex() DOSTĘPNEJ TYLKO DLA TABLICY (dla qsAll       nie jest dostępna).

const changeDot = () => {
    const activeDot = dots.findIndex(item => item.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
    };
//-------------------------------------------------------------------------------------------

// ZMIANA AKTYWNEJ KROPKI ZA POMOCĄ METODY forEach(), KTÓRA JEST DOSTĘPNA TEŻ DLA qsAll(bez         potrdzeby zmiany const = dots na array).

// const changeDot = () => {
//     dots.forEach(item => item.classList.remove('active'));
//     dots[active].classList.add('active');
// };
//--------------------------------------------------------------------------------------------

const changeSlide = () => {
    active++;
    if(active === slideList.length) {
        active = 0;
    }
    img.src = slideList[active].img;
    h1.textContent = slideList[active].tekst;
    changeDot();
};
setInterval(changeSlide, time);
































// const slideList = [{
//  img: "images/img1.jpg",
//  text: 'Pierwszy tekst'
// },
// {
//  img: "images/img2.jpg",
//  text: 'Drugi tekst'
// },
// {
//  img: "images/img3.jpg",
//  text: 'Trzeci tekst'
// }];

// const image = document.querySelector('img.slider');
// const h1 = document.querySelector('h1.slider');
// // Interfejs
// const time = 3000;
// let active = 0;

// const changeSlide = () => {
//  active++;
//  if (active === slideList.length) {
//   active = 0;
//  }
//  image.src = slideList[active].img;
//  h1.textContent = slideList[active].text;

// }
// setInterval(changeSlide, time)

// // Implementacje