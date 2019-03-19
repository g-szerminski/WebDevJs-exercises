const btn = document.querySelector('button');
const div = document.querySelector('div');

const names = ['Jagienka', 'Dobrawa (Dobrusia)', 'Daria', 'Asia', 'Kira', 'Marysia', 'Anastazja', 'Kasia'];
const prefixes = ["Wydaje mi się", "Mam wrażenie", "Szczerze powiedziawszy, myślę", "Szczerze uważam", "Na 100% twierdzę", "Jestem pewien"];

const nameGenerator = () => {
// const index = Math.floor(Math.random() * 7);
const nameIndex = Math.floor(Math.random() * names.length);
const prefixIndex = Math.floor(Math.random() * prefixes.length);
div.textContent = `${prefixes[prefixIndex]}, że najfajniejsz imię to ${names[nameIndex]}`;

}
// console.log(names[index]);
btn.addEventListener('click',nameGenerator);