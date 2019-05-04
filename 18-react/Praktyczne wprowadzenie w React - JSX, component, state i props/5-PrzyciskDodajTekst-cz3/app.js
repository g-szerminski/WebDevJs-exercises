class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            btn: 'uruchom losowanie'
        }
    }
     handleClick() {
       const number = Math.floor(Math.random() * 10);
        this.setState((prevState) => ({
            text: prevState.text + number
        })
        )
     }

    render() {
        // const btnName = 'Stwórz liczbę'
       return (
          <>
             <button onClick={this.handleClick.bind(this)}>{this.state.btn}</button>
             {/* <button onClick={this.handleClick.bind(this)}>{btnName}</button> */}
             {/* <button onClick={this.handleClick.bind(this)}>{this.props.btnTitle}</button> */}
             <PanelResult text={this.state.text}>bbb</PanelResult>
          </>
       )
    }
 }
 const PanelResult = (props) => {
     return (
        <h1>{props.text}: {props.children}</h1>
     )
 };

 ReactDOM.render(<App btnTitle='dodaj cyfrę'/>, document.getElementById('root'));