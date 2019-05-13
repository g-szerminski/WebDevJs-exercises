class App extends React.Component {
  state = {
    availableProducts: 7,
    shoppingCart: 0
  };

  handleRemoveCartItem = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart - 1
      // availableProducts: this.state.availableProducts + 1
    });
  };

  handleAddCartItem = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 1
      // availableProducts: this.state.availableProducts - 1
    });
  };

  handleBuy = () => {
    this.setState({
      availableProducts: this.state.availableProducts - this.state.shoppingCart,
      shoppingCart: 0
    });
  };

  render() {
    const { shoppingCart, availableProducts } = this.state;
    const style = shoppingCart === 0 ? { opacity: 0.3 } : {};
    return (
      <div>
        <button
          disabled={shoppingCart ? false : true}
          onClick={this.handleRemoveCartItem}>
          -
        </button>
        <span style={style}>{shoppingCart}</span>
        <button
          disabled={shoppingCart === availableProducts ? true : false}
          onClick={this.handleAddCartItem}>
          +
        </button>
        {shoppingCart > 0 && <button onClick={this.handleBuy}>Kup</button>}
        {/* <button
          disabled={this.state.availableProducts ? false : true}
          onClick={this.handleAddCartItem}>
          +
        </button> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
