class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
    console.log("Wywołana metoda constructor");
  }

  componentWillMount() {
    console.log("Wywołanie metody WillMount");
  }

  componentDidMount() {
    console.log("Wywołanie metody DidMount");
    this.setState({
      number: 1
    });
  }

  componentDidUpdate() {
    console.log("Wywołanie metody DidUpdate");
  }

  render() {
    console.log("Wywołana metoda render");
    return (
      <>
        <p>lifecycle - montowanie komponentu</p>
        <Child />
      </>
    );
  }
}

class Child extends React.Component {
  componentDidMount() {
    console.log("Wywołanie metody DidMount w komponencie Child");
    // this.setState({
    //   number: 1
    // });
  }
  render() {
    console.log(`
    -------------------------------------------
    Wywołana metoda render w komponencie Child
    -------------------------------------------
    `);
    return <h1>Dziecko</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
