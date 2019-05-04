class App extends React.Component {
    state = {
        value: ''
    }

    handleInputChange(e) {
        console.log(e.target.value);
        this.setState({
            value: e.target.value
        })
    }
    handleBtnReset = () => {
        this.setState({
            value: ''
        })
    };

    render() {
        return(
        <>
            <input value={this.state.value} placeholder='wpisz...' onChange={this.handleInputChange.bind(this)} type="text"/>
            <button onClick={this.handleBtnReset}>Reset</button>
            <h1 className='title'>{this.state.value.toLocaleUpperCase()}</h1>
        </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

