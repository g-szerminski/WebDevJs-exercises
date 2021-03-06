const Cash = props => {
  const value = ((props.cash / props.ratio) * props.price).toFixed(2);
  return (
    <div>
      {props.title} {props.cash <= 0 ? "" : value}
    </div>
  );
};

class ExchangeCounter extends React.Component {
  state = {
    amount: "",
    product: "electricity"
  };

  static defaultProps = {
    currencies: [
      {
        id: 0,
        name: "złoty",
        ratio: 1,
        title: "Wartość w złotówkach"
      },
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
    ],
    prices: {
      electricity: 0.5,
      gas: 4.9,
      oranges: 3
    }
  };

  handleChange = e => {
    this.setState({
      amount: e.target.value
    });
  };
  handleSelect = e => {
    this.setState({
      product: e.target.value,
      amount: ""
    });
  };
  insertSuffix(select) {
    if (select === "electricity") return <em>kWh</em>;
    else if (select === "gas") return <em>litrów</em>;
    else if (select === "oranges") return <em>kg</em>;
    else return null;
  }
  selectPrice(select) {
    return this.props.prices[select];
  }

  render() {
    const { amount, product } = this.state;
    const price = this.selectPrice(product);
    const exchange = this.props.currencies.map(currency => (
      <Cash
        key={currency.id}
        ratio={currency.ratio}
        title={currency.title}
        cash={amount}
        price={price}
      />
    ));
    return (
      <div className='app'>
        <label>
          Wybierz produkt:
          <select value={product} onChange={this.handleSelect}>
            <option value='electricity'>prąd</option>
            <option value='gas'>banzyna</option>
            <option value='oranges'>pomarańcze</option>
          </select>
        </label>
        <br />
        <label>
          <input
            type='number'
            value={this.state.amount}
            onChange={this.handleChange}
          />
          {this.insertSuffix(this.state.product)}
        </label>
        {exchange}
      </div>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
