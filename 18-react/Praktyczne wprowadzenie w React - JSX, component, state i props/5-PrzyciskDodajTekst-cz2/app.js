class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    // state = {
    //    text: ''
    //  }
     handleClick() {
       //  this.state.text += 'a';
       //  console.log(this.state.text);
       const letter = 'a';
       console.log(this);
    //    this.setState({
    //       text: this.state.text + letter
    //    })
        this.setState((prevState) => ({
            text: prevState.text + letter
        })
        )
     }

    render() {
       return (
          <>
             <button onClick={this.handleClick.bind(this)}>Dodaj 'A'</button>
             <h1>{this.state.text}</h1>
          </>
       )
    }
 }
 ReactDOM.render(<App/>, document.getElementById('root'));