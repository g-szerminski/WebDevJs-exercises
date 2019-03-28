const timer = () => {
    let time = 0;
    const counter = () => {
        time++;
        document.body.textContent = `Na stronie spędziłeś ${time} s`;
    }
    return counter
};
const counting = timer();
setInterval(counting, 1000);

// const timer = () => {
//     let time = 0;
//     const counter = () => {
//         setInterval(()=> {
//         time++;
//         document.body.textContent = `Na stronie spędziłeś ${time} s`;
//         }, 1000);
//     }
//     return counter
// };
// const counting = timer();
// counting();