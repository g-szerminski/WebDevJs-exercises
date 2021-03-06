class App extends React.Component {
  state = {
    active: true
  };

  handleClick = () => {
    this.setState(prevState => ({
      active: !prevState.active
    }));
  };

  render() {
    return (
      <div>
        <SwitchButton active={this.state.active} click={this.handleClick} />
        {this.state.active && <Clock />}
      </div>
    );
  }
}
const SwitchButton = props => (
  <button onClick={props.click}>{props.active ? "Wyłącz" : "Włącz"}</button>
);
class Clock extends React.Component {
  // interval = "";
  state = {
    time: 0
  };

  getTime() {
    const currentTime = new Date();
    return {
      //   hours: new Date().getHours()
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds()
    };
  }
  setTime() {
    this.setState({
      time: this.getTime()
    });
  }

  // setTime() {
  //   const time = this.getTime();
  //   this.setState({ time });
  // }

  componentDidMount() {
    console.log("Zegarek zamontowany");
    this.interval = setInterval(this.setTime.bind(this), 1000);
  }

  componentWillUnmount() {
    console.log("Zegarek usunięty");
    clearInterval(this.interval);
  }

  render() {
    const { hours, minutes, seconds } = this.state.time;
    return (
      <div>
        {`${hours > 9 ? hours : ` 0${hours}`}h `}:
        {`${minutes > 9 ? minutes : ` 0${minutes}`}m `}:
        {`${seconds > 9 ? seconds : ` 0${seconds}`}s `}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
