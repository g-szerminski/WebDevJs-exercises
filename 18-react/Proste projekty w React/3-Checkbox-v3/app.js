// const PositiveMessage = () => <p>Możesz obejżeć film. Zapraszamy.</p>;
// const NegativeMessage = () => <p>Nie możesz obejżeć filmu.</p>;
const ValidationMessage = props => <p>{props.txt}</p>;

class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmitted: false
  };

  heandleCheckBox = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false
    });
  };

  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <ValidationMessage txt="Możesz obejżeć film. Zapraszamy." />;
      } else {
        return <ValidationMessage txt="Nie możesz obejżeć filmu." />;
      }
    } else {
      return null;
    }
  };

  handleFormSubmit = e => {
    e.preventDefault();
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true
      });
    }
  };

  render() {
    const { isConfirmed } = this.state;
    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
          <h1>Kup bilet na horror roku !</h1>
          <input
            type="checkbox"
            id="age"
            onChange={this.heandleCheckBox}
            // checked={this.state.isConfirmed}
            checked={isConfirmed}
          />
          <label htmlFor="age">Mam conajmniej 16 lat</label>
          <br />
          <button type="submit">Kup bilet</button>
          {this.displayMessage()}
        </form>
      </>
    );
  }
}
ReactDOM.render(<TicketShop />, document.getElementById("root"));
