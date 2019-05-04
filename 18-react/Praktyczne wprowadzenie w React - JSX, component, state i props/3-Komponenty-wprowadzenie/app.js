// // komponent funkcyjny - bezstanowy
// const App = () => {
//     return (
//         <div>
//             <h1>Pierwszy komponent</h1>
//         </div>
//     )
// }

// // komponent klasowy - stanowy
// class App2 extends React.Component {
//     state = {
//         number: 0,
//     }
//     render() {
//         return (
//             <section>
//                 <h2>Komponent klasowy {this.state.number}</h2>
//             </section>
//         )
//     }
// }
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<App2 />, document.getElementById('root'));
//-----------------------------------------------------------------------
const Header = () => {
    return <h1>Witaj na stronie</h1>
};
class Blog extends React.Component {
    render() {
        return (
            <section>
                <h2>Artykuł</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto dolor, aliquam atque, dicta modi quia, commodi nesciunt consequatur eligendi doloribus magnam itaque quas expedita ut? Distinctio illum ea earum voluptatibus!</p>
            </section>
        )
    }
}

const App = () => {
    return (
        <>
            <Header/>
            <Blog/>
        </>
    )
}
ReactDOM.render(<App/>, document.getElementById('root'));