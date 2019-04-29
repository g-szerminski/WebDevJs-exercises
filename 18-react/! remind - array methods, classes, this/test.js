// const users = ["adam", "bolek", "rosomak", "grześ"];
// const fl = users.map(item => {
//   return item[0].toUpperCase();
// });
// console.log(fl);
// console.log(users[0][1]);
//---------------------------------------------------------------------
// const usersAge = [20, 30, 40, 50];
// const section = document.createElement("section");
// usersAge.forEach((age, index) => {
//   section.innerHTML += `<h1>Użytkownik ${index + 1}</h1>
//     <p>wiek ${age}</p>`;
// });

// document.body.appendChild(section);
//---------------------------------------------------------------------
// const users = ["adam", "bolek", "rosomak", "grześ"];
// const moreSix = users.filter(item => {
//   return item.length > 4;
// });
// console.log(moreSix);

// const includK = users.filter(item => {
//   return item.includes("ś");
// });
// console.log(includK);
//------------------------------------------------------------------------
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   showName() {
//     console.log(`Imię osoby to ${this.name}`);
//   }
// }
// const bolek = new Person("Bolek");
// bolek.showName();

// class Student extends Person {
//   constructor(
//     name = "nie podałeś imienia !!!",
//     degrees = ["nie wprowadziłeś stopni !!!"]
//   ) {
//     super(name);
//     this.degrees = degrees;
//   }
//   showDegrees() {
//     const completed = this.degrees.filter(item => item > 2);
//     console.log(
//       `Student ${this.name} ma stopnie ${this.degrees} i zaliczył ${
//         completed.length
//       } przedmioty.`
//     );
//   }
// }
// const janek = new Student("janek", [2, 4, 5, 3, 2]);
// janek.showDegrees();
//----------------------UŻYCIE bind.this-----------------------------------------
// const cat = {
//   kids: ['lucek', 'lapciuch'],
//   showKidsName() {
//     console.log(`kot ma potomstwo: ${this.kids}`);
//     const showKidsNumber = function() {
//       console.log(this.kids.length);
//     }.bind(this);
//     showKidsNumber();
//   }
// }
// cat.showKidsName()
//---------------------------UŻYCIE arrow function-------------------------------
const cat = {
  kids: ['lucek', 'lapciuch'],
  showKidsName() {
    console.log(`kot ma potomstwo: ${this.kids}`);
    const showKidsNumber = () => {
      console.log(this.kids.length);
    };
    showKidsNumber();
  }
}
cat.showKidsName()