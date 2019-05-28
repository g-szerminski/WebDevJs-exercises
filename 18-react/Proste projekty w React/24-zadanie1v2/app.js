class RandomFortune extends React.Component {
  state = {
    fortunes: [
      " Będziesz długo żyć",
      " Będziesz żyć nie za długo :-(",
      " Sama właściwie nie wiem co będzie"
    ],
    fortune: null,
    value: ""
  };

  handleRandomOmen = () => {
    const randomIndex = Math.floor(Math.random() * this.state.fortunes.length);
    this.setState({
      fortune: this.state.fortunes[randomIndex]
    });
  };

  handleInputOmen = e => {
    this.setState({
      value: e.target.value
    });
  };

  handelAddOmen = () => {
    if (this.state.value === "") return alert("Wpisz coś");
    const fortunes = [...this.state.fortunes];
    fortunes.push(`${""} ${this.state.value}`);
    this.setState({
      fortunes,
      value: ""
    });
    alert(
      `Dodana wróżba to: ${this.state.value}
      Aktualne wróżby to: ${fortunes}`
    );
  };

  // handelAddOmen = () => {
  //   if (this.state.value === "") return alert("Wpisz coś");
  //   this.state.fortunes.push(this.state.value);
  //   this.setState({
  //     value: ""
  //   });
  //   alert(`Dodana wróżba to: ${this.state.value}`);
  // };

  render() {
    return (
      <div>
        <button onClick={this.handleRandomOmen}>Zobacz wróżbę</button>
        <br />
        <label>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleInputOmen}
          />
          <button onClick={this.handelAddOmen}>Dodaj wróżbę</button>
        </label>
        {this.state.fortune ? (
          <h1>{this.state.fortune}</h1>
        ) : (
          " losuj wreszcie !"
        )}
      </div>
    );
  }
}

ReactDOM.render(<RandomFortune />, document.getElementById("root"));
