class Form extends React.Component {
  state = {
    city: "",
    text: "",
    isLiked: true,
    number: "0"
  };

  handleChange = e => {
    // console.log([e.target.name]);
    // console.log(e.target.type);
    console.log(e.target.checked);

    if (e.target.type === "checkbox") {
      this.setState({
        [e.target.name]: e.target.checked
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  render() {
    return (
      <div>
        <label>
          Podaj miasto
          <input
            name="city"
            type="text"
            value={this.state.city}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Napisz coś o tym mieście
          <textarea
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Czy lubisz to miasto
          <input
            name="isLiked"
            type="checkbox"
            checked={this.state.isLiked}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Ile razy byliście w tym mieście?
          <select
            name="number"
            value={this.state.number}
            onChange={this.handleChange}>
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
