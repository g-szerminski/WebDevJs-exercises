Math.random() * 7 // losowanie od 0 do 7 bez 7

Math.random() * (6-4) + 4 //losowanie od 4 do 6 bez 6

const randomNumber = (min, max) => {
    const number = Math.random() * (max - min) + min;
    return number;
}

// Zwracanie losowej liczby całkowitej z danego przedziału
Math.floor(Math.random() * (6 - 4 + 1) + 4);

const randomNumberInt = (min, max) => {
    const number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;
}

// Krótsza wersja tej samej funkcji
const randomInt = (min, max) =>  Math.floor(Math.random() * (max - min + 1) + min);