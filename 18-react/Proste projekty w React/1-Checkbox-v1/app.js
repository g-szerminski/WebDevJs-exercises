const PositiveMessage = () => <p>Możesz obejżeć film. Zapraszamy.</p>;
const NegativeMessage = () => <p>Nie możesz obejżeć filmu.</p>;

class CheckBoxAge extends React.Component {
  state = {
    isConfirmed: false
  }

  heandleCheckBox = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed
    })
  }

  displayMessage = () => {
    if (this.state.isConfirmed) {
      return <PositiveMessage />;
    } else {
      return <NegativeMessage />;
    }
  }

  render() {
    console.log(this.state.isConfirmed);
    return (
      <>
        <h1>Kup bilet na horror roku !</h1>
        <input
          type="checkbox"
          id="age"
          onChange={this.heandleCheckBox}
          checked={this.state.isConfirmed}
        />
        <label htmlFor="age">Mam conajmniej 16 lat</label>
        {this.displayMessage()}
      </>
    )
  }
}
ReactDOM.render(<CheckBoxAge />, document.getElementById("root"));
