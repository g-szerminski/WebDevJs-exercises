/* https://websamuraj.pl/examples/react/zadanie-wrozba/ */
//Zobacz

//WYTYCZNE
// Jeden komponent
// Wersja na 5 - zobacz wróżbę, losuje jedną z trzech wróżb
// Wersja na 6 - dodaje do trzech istniejących wróżb kolejną

class RandomFortune extends React.Component {
  state = {
    fortunes: [
      "Będziesz długo żyć",
      "Będziesz żyć nie za długo :-(",
      "Sama właściwie nie wiem co będzie"
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
    if (this.state.value === "") alert("Wpisz coś");
    const fortunes = this.state.fortunes.push(this.state.value);
    this.setState({
      fortunes,
      value: ""
    });
    alert(`Wróżba dodana. Aktualne wróżby to: ${this.state.fortunes}`);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleRandomOmen}>Zobacz wróżbę</button>
        <label>
          <input
            type='text'
            value={this.state.value}
            onChange={this.handleInputOmen}
          />
          <button onClick={this.handelAddOmen}>Dodaj wróżbę</button>
        </label>
        <h1>{this.state.fortune ? this.state.fortune : "losuj wreszcie !"}</h1>
      </div>
    );
  }
}

ReactDOM.render(<RandomFortune />, document.getElementById("root"));
