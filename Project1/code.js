// console.log('code');
// const userAge = [19, 27, 54, 22, 64, 26, 59];
// for (let i = 0; i < userAge.length; i++) {
//     console.log(`wiek użytkownika ${i+1} to ${userAge.sort()[i]}`);
// }

// const usersDateBirth = [2000, 1992, 1932, 1980, 1981, 1971, 2009];
// const currentYear = 2019;

// for (let i = 0; i < usersDateBirth.length; i++) {
//     const userAge = currentYear - usersDateBirth[i];
//     console.log(userAge);    
// }
//--------------------------------------------------------------------------------------
// const guest = ["piłkarz", "kucharz", "murarz", "programista", "polityk", "pisarz", "magazynier", "emeryt"];
// for (let i = 0; i < guest.length; i++) {
//     if (guest[i] == 'programista') {
//         console.log('nie wchodzisz programisto');
//     } else if (guest[i] == 'polityk') {
//         console.log('nie wchodzisz polityku');
//     } else {
//         // console.log('witamy panie ' + guest[i]);
//         console.log(`witamy panie ${guest[i]}, zapraszamy`);
//     }
// }

// const colors = ["red", "green", "black", "yellow", "white", "gold", "silver", "brown"];

// for (const color of colors) {
//     console.log(color);
    
// }
//-----------------------------------------------------------------
// function plusOne(item) {
//     item++
//     console.log(item);
//     return item;
// };
// function minusOne(item) {
//     item--
//     console.log(item);
//     return item;
// };
// function count (x, callback) {
//     return callback(x);
// }
//------------------------------------------------------------------------
// const showTime = () => console.log('wywołuję');
// setInterval(showTime, 2000);
// clearInterval(showTime);
// clearTimeout(showTime);
//----------------------------------------------------------------------
// const usersAge = [20, 30, 21, 17, 67, 96, 55];
// usersAge.sort().forEach(function(item) {
//     console.log(`wiek użytkownika to ${item}`);
//     }
// );

// function showAge(item) {
//     console.log(`wiek użytkownika to ${item}`);
// }
// usersAge.forEach(showAge());
//-----------------------------------------------------------------------------
// const showArguments = function() {
//     console.log(arguments); //arguments - nazwa dla obiektu (nazwa przypisana)
//     console.log(arguments.length); //długość - ile argumentów przekazaliśmy
//     console.log(arguments[0]); //odwołanie do konkretnego argumentu
//     console.log(typeof arguments); //obiekt (tablicopodobny). Ma właściwość length, można odwołać się za pomocą notacji tablicowej np. arguments[2]. Nie ma metod znanych z tablicy
//     console.log(Array.isArray(arguments));
//    }
//    showArguments(1, 'aaa', {});


// const addAllNumbers = function() {
//     let result = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         result += arguments[i];
//     }
//     return result;
// };
// const usersMoney = addAllNumbers(23,34,34,35,67,3);
//---------------------------------------------------------------------------
// function showUsers(owner, ...others) {
//     console.log(`Na imprezie był ${owner} ${others.length ? 'oraz ' + others + '.' : '.'}`);
// };
// showUsers("Adrian");
// showUsers("Adrian", "Jadzia", "Staszek", "Henio");
//---------------------------------------------------------------------------
// console.log(`${new Date().toLocaleTimeString()}`);
//--------------------------------------------------------------------------

