class Clock extends React.Component {
  interval = "";
  state = {
    time: 0
  };

  getTime() {
    const currentTime = new Date();
    return {
      //   hours: new Date().getHours()
      hours: currentTime.getHours() + "h",
      minutes: currentTime.getMinutes() + "m",
      seconds: currentTime.getSeconds() + "s"
    };
  }
  setTime() {
    this.setState({
      time: this.getTime()
    });
  }
  componentDidMount() {
    setInterval(this.setTime.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { hours, minutes, seconds } = this.state.time;
    return (
      <>
        {hours} : {minutes} : {seconds}
      </>
    );
  }
}
ReactDOM.render(<Clock />, document.getElementById("root"));
