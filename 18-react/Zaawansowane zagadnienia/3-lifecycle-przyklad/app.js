class App extends React.Component {
  state = {
    status: true
  };

  //   handleButton = () => {
  //     this.setState({
  //       status: !this.state.status
  //     });
  //   };

  componentDidMount() {
    console.log("Aplikacja zamontowana");
  }

  componentDidUpdate() {
    console.log("Aplikacja zaktualizowana");
  }

  handleButton() {
    this.setState({
      status: !this.state.status
    });
  }

  render() {
    console.log("Renderowanie aplikacji");
    return (
      <>
        <button onClick={this.handleButton.bind(this)}>Przełącz</button>
        <Child1 status={this.state.status} />
        {this.state.status && <Child2 />}
      </>
    );
  }
}

class Child1 extends React.Component {
  componentDidMount() {
    console.log("Komponent Child1 zamontowany");
  }

  componentDidUpdate() {
    console.log("Komponent Child1 zaktualizowany");
  }

  render() {
    console.log("Renderowanie Child1 komponentu");

    return <div>{String(this.props.status)}</div>;
  }
}

class Child2 extends React.Component {
  componentDidMount() {
    console.log("Komponent Child2 zamontowany");
  }

  componentDidUpdate() {
    console.log("Komponent Child2 zaktualizowany");
  }
  componentWillUnmount() {
    console.log("Komponent Child2 odmontowany");
  }
  render() {
    return <div>Komponet Child2 zamontowany</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
