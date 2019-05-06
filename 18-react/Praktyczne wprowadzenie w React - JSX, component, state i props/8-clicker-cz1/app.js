class Counter extends React.Component {
    state = {
        count: 0,
        result: this.props.result
    }
    handleClick(type, number) {
        // debugger
        if(type === 'odejmowanie') {
            this.setState(prevState => ({
                count: prevState.count + 1,
                result: prevState.result - number
            }))
        } else if (type === 'reset') {
            this.setState(prevState => ({
                count: prevState.count + 1,
                // result: prevState = 0
                result: 0
            }))
        } else if(type === 'dodaj') {
            this.setState(prevState => ({
                count: prevState.count + 1,
                result: prevState.result + number
            }))
        }
    }

    render() {
        return (
            <>
                {/* <button onClick={this.handleClick.bind(this, 'odejmowanie', 10)}>-10</button> */}
                {/* <button onClick={this.handleClick('odejmowanie', 10)}>-10</button> */}
                <button onClick={() => this.handleClick('odejmowanie', 10)}>-10</button>
                <button onClick={this.handleClick.bind(this, 'odejmowanie', 1)}>-1</button>
                <button onClick={this.handleClick.bind(this, 'reset')}>Reset</button>
                <button onClick={this.handleClick.bind(this, 'dodaj', 1)}>+1</button>
                <button onClick={this.handleClick.bind(this, 'dodaj', 10)}>+10</button>
                <h1>Liczba kliknięć: {this.state.count}</h1>
                <h1>Wynik: {this.state.result}</h1>
            </>
        )
    }
}
const startValue = 10;
// ReactDOM.render(<Counter result={10}/>, document.getElementById('root'));
ReactDOM.render(<Counter result={startValue}/>, document.getElementById('root'));
