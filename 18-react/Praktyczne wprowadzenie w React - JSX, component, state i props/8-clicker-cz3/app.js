class Counter extends React.Component {
  state = {
    count: 0,
    result: this.props.result
  };
  handleClick = (type, number) => {
    // debugger
    if (type === "odejmowanie") {
      this.setState(prevState => ({
        count: prevState.count + 1,
        result: prevState.result - number
      }));
    } else if (type === "reset") {
      this.setState(prevState => ({
        count: prevState.count + 1,
        // result: prevState = 0
        result: 0
      }));
    } else if (type === "dodaj") {
      this.setState(prevState => ({
        count: prevState.count + 1,
        result: prevState.result + number
      }));
    }
  };

  render() {
    return (
      <>
        <MathButton
          name="-10"
          number="10"
          type="odejmowanie"
          // click={this.handleClick.bind(this)}
          click={this.handleClick}
        />
        <MathButton
          name="-1"
          number="1"
          type="odejmowanie"
          click={this.handleClick}
        />
        <MathButton name="reset" type="reset" click={this.handleClick} />
        <MathButton
          name="+1"
          number="1"
          type="dodaj"
          click={this.handleClick}
        />
        <MathButton
          name="+10"
          number="10"
          type="dodaj"
          click={this.handleClick}
        />
        <ResultPanel count={this.state.count} result={this.state.result} />
      </>
    );
  }
}
const MathButton = props => {
  const number = parseInt(props.number);
  return (
    <button onClick={() => props.click(props.type, number)}>
      {props.name}
    </button>
  );
};

const ResultPanel = props => {
  return (
    <>
      <h1>
        Liczba kliknięć: {props.count}{" "}
        {props.count > 10 ? <span>Przegrzanie</span> : null}
      </h1>
      <h1>Wynik: {props.result}</h1>
    </>
  );
};

const startValue = 10;
// ReactDOM.render(<Counter result={10}/>, document.getElementById('root'));
ReactDOM.render(
  <Counter result={startValue} />,
  document.getElementById("root")
);
