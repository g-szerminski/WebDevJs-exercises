let optionsArray = ['walcz', 'przemyśl to jeszcze raz'];
const input = document.querySelector('input');
const addBtn = document.querySelector('.add');
const resetBtn= document.querySelector('.clean');
const adviceBtn = document.querySelector('.showAdvice');
const optionsBtn = document.querySelector('.showOptions');
const h1 = document.querySelector('h1');

const addOption = (e)=> {
    e.preventDefault();
        if(input.value) {
        // const newOption = input.value;
        optionsArray.push(input.value);
        alert(`Dodałeś nową możliwość: ${input.value}`);
        input.value = '';
        console.log(optionsArray);
        } else {
            alert('Nic nie wpisałeś !');
        }
};
const resetOptions = (e)=> {
    e.preventDefault();
    // optionsArray = [];
    optionsArray.length = 0;
    h1.textContent = '';
    alert('Usunąłeś wszystkie możliwości')
    console.log(optionsArray);
};
const showAdvice = (e)=> {
    e.preventDefault();
    const index = Math.floor(Math.random() * optionsArray.length);
    h1.textContent = optionsArray[index];
};
const showOptions = (e) => {
    e.preventDefault();
    if(optionsArray.length > 0) {
    alert(optionsArray.join(',\n'));
    console.log(optionsArray.join(', '));
    } else {
        alert('nie dodałeś jeszcze żadnej możliwości !')
    }
};

addBtn.addEventListener('click', addOption);
resetBtn.addEventListener('click', resetOptions);
adviceBtn.addEventListener('click', showAdvice);
optionsBtn.addEventListener('click', showOptions);
