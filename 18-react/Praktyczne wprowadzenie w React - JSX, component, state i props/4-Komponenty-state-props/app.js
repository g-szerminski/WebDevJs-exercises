// class ShoppingList extends React.Component {
//     state = {
//         items1: 'ogórki',
//         items2: 'sok',
//         items3: 'coś do picia'
//     }
//     render() {
//         return(
//             <>
//                 <h1>Lista zakupów</h1>
//                 <ul>
//                     <li>{this.state.items1}</li>
//                     <li>{this.state.items2}</li>
//                     <li>{this.state.items3}</li>
//                 </ul>
//             </>
//         )
//     }
// }
// ReactDOM.render(<ShoppingList/>, document.getElementById('root'));

class ShoppingList extends React.Component {
    state = {
        items1: 'ogórki',
        items2: 'sok',
        items3: 'coś do picia'
            }
    render() {
        return (
            <>
                <h1>Lista zakupów</h1>
                <ul>
                    <ItemsList name={this.state.items1} example={2 + 2}/>
                    <ItemsList name={this.state.items2}/>
                    <ItemsList name={this.state.items3}/>
                </ul>
            </>
        )
    }
}
// const ItemsList = (props) => {
//     return (
//         <li>{props.name} - {props.example}</li>
//     )
// };
class ItemsList extends React.Component {
    render() {
        return (
            <li>{this.props.name} - {this.props.example}</li>
        )
    }
}

ReactDOM.render(<ShoppingList/>, document.getElementById('root'));