// 'use strict'
/* KONSTRUKTOR I INSTANCJA */

// Konstruktor to funkcja. Konwencja nakazuje by nazwa konstruktura pisana była wielką literą.
// konstruktor tworzymy za pomocą wyrażenie (przypisanie do zmiennej) lub deklracja. oba przykłądy ponizej.

// const Car = function() { }

function Car(name) {
 // console.log(this);
 this.name = name;
}

// Instanacja (egzemplarz) - obiekt stworzony w oparciu o wzór w konstruktorze. Posiada także odwołanie do prototypu constructora.

const maluch = new Car('maluch');
const polonez = new Car('polonez');
// JAK DZIAŁA TWORZENIE NOWEGO EGZEMPLARZA (INSTANCJI)
// 1. new + funkcja konstruktora - powstaje nowy  obiekt na którym wywoływana jest funkcja konstruktora.
// 2. następuje wiązanie this z utworzonym obiektem
// 3. W nowym obiekcie powstaje własciwość __proto__ wskazująca na prototyp konstruktora
// 4. Przypisanie nowego obiektu do zmiennej

maluch.name = "zabytek"
arr = [1, 2, 3, 4, 5];
Array.prototype.delete = function(index) {
    return this.splice(index, 1);
}

class Family {
    constructor(members, ...names) {
        this.members = members;
        this.names = names;
    }
    addMember(newMember) {
        this.names.push(newMember);
        this.members = this.names.length;
        console.log(`Nowy członek rodziny to: ${this.newMember}.
        Rodzina liczy teraz ${this.members} osób.`);
    }
    removeMember(index) {
        this.names.splice(index, 1);
        this.members = this.names.length;
        console.log(index);
    }
    static makeFamily(...members) {
        return members;
    }
}
const kowalscy = new Family();
// const kowalscy = new Family();

//----------- CONSTRUKTOR, DZIEDZICZENIE I SUPER-----------------------
class Animal {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
    breath() {
        console.log('Zwierzę oddycha');
    }
}
const zwierze = new Animal(2);


class Mammal extends Animal {
    constructor(age, name, hair) {
        super(age, name);
        this.hair = hair;
    }
    drinkMilk() {
        console.log('Ssaki piją mleko');
    }
    speak() {
        console.log('Muuuuuuuuuuuuuuuu');
    }
};

const mammal = new Mammal(3, 'Maks','blond');
mammal.breath();
mammal.drinkMilk();

class Human extends Mammal {
    constructor(age, name, hair, language){
        super(age, name, hair);
        this.language = language;
    }
    speak() {
        console.log('Człowiek mówi');
    }
}
const czlowiek = new Human(34, 'Roman', 'cimne', 'polski');

//-------------- THIS ---------------------------------
const fn = function() {
    this.a = 5;
}
fn();
const obj = {
    name: 'Adam',
    fn: fn
}

document.addEventListener('click', function() {
    console.log(this);
    const inside = function() {
        'use strict'
        console.log(this);
    }
    inside();
});

const thisExample = function() {
    console.log(this.example, this);
    const inside = function() {
        console.log(this.example, this);
    };
    inside();
}
thisExample();