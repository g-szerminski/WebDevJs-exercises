const Cash = props => {
  const value = (props.cash / props.ratio).toFixed(2);
  return (
    <div>
      {props.title} {props.cash <= 0 ? "" : value}
    </div>
  );
};

class ExchangeCounter extends React.Component {
  state = {
    amount: ""
  };

  currencies = [
    {
      id: 1,
      name: "dollar",
      ratio: 3.6,
      title: "Wartość w dolarach"
    },
    {
      id: 2,
      name: "euro",
      ratio: 4.2,
      title: "Wartość w euro"
    },
    {
      id: 3,
      name: "pund",
      ratio: 4.5,
      title: "Wartość w funtach"
    }
  ];

  handleChange = e => {
    this.setState({
      amount: e.target.value
    });
  };

  render() {
    const { amount } = this.state;
    const exchange = this.currencies.map(currency => (
      <Cash
        key={currency.id}
        ratio={currency.ratio}
        title={currency.title}
        cash={amount}
      />
    ));
    return (
      <div className='app'>
        <label>
          <input
            type='number'
            value={this.state.amount}
            onChange={this.handleChange}
          />
        </label>
        {exchange}
      </div>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
