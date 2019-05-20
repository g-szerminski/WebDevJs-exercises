class Form extends React.Component {
  state = {
    city: "",
    text: "",
    isLiked: true,
    number: "0"
  };

  handleCityChange = e => {
    this.setState({
      city: e.target.value
    });
  };

  handleTextChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleIsLikedChange = e => {
    this.setState({
      isLiked: e.target.checked
    });
  };

  handleVisitsNumberChange(e) {
    this.setState({
      number: e.target.value
    });
  }

  render() {
    return (
      <div>
        <label>
          Podaj miasto
          <input
            type="text"
            value={this.state.city}
            onChange={this.handleCityChange}
          />
        </label>
        <br />
        <label>
          Napisz coś o tym mieście
          <textarea value={this.state.text} onChange={this.handleTextChange} />
        </label>
        <br />
        <label>
          Czy lubisz to miasto
          <input
            type="checkbox"
            checked={this.state.isLiked}
            onChange={this.handleIsLikedChange}
          />
        </label>
        <br />
        <label>
          Ile razy byliście w tym mieście?
          <select
            value={this.state.number}
            onChange={this.handleVisitsNumberChange.bind(this)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="more">więcej</option>
          </select>
        </label>
      </div>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("root"));
