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
    return (
      <div>
        <button
          disabled={this.state.shoppingCart ? false : true}
          onClick={this.handleRemoveCartItem}>
          -
        </button>
        <span>{this.state.shoppingCart}</span>
        <button
          disabled={
            this.state.shoppingCart === this.state.availableProducts
              ? true
              : false
          }
          onClick={this.handleAddCartItem}>
          +
        </button>
        {this.state.shoppingCart > 0 && (
          <button onClick={this.handleBuy}>Kup</button>
        )}
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
