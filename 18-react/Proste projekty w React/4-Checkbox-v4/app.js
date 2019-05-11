const ValidationMessage = props => <p>{props.txt}</p>;

const OrderForm = props => {
  const { submit, change, isConfirmed } = props;
  return (
    <form onSubmit={submit}>
      <input
        type="checkbox"
        id="age"
        onChange={change}
        // checked={this.state.isConfirmed}
        checked={isConfirmed}
      />
      <label htmlFor="age">Mam conajmniej 16 lat</label>
      <br />
      <button type="submit">Kup bilet</button>
    </form>
  );
};

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

  handleFormSubmit = e => {
    e.preventDefault();
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true
      });
    }
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

  render() {
    const { isConfirmed } = this.state;
    return (
      <>
        <h1>Kup bilet na horror roku !</h1>
        <OrderForm
          change={this.heandleCheckBox}
          submit={this.handleFormSubmit}
          checked={isConfirmed}
        />
        {this.displayMessage()}
      </>
    );
  }
}
ReactDOM.render(<TicketShop />, document.getElementById("root"));
