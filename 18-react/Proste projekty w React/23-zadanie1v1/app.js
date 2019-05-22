/* https://websamuraj.pl/examples/react/zadanie-wrozba/ */
//Zobacz

//WYTYCZNE
// Jeden komponent
// Wersja na 5 - zobacz wróżbę, losuje jedną z trzech wróżb
// Wersja na 6 - dodaje do trzech istniejących wróżb kolejną

class RandomFortune extends React.Component {
  state = {
    fortune: ""
  };

  handleRandomOmen = () => {
    const omen = [
      "Będziesz długo żyć",
      "Będziesz żyć nie za długo :-(",
      "Sama właściwie nie wiem co będzie"
    ];
    const randomIndex = Math.floor(Math.random() * omen.length);
    this.setState({
      fortune: omen[randomIndex]
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleRandomOmen}>Zobacz wróżbę</button>
        <h1>{this.state.fortune}</h1>
      </div>
    );
  }
}

ReactDOM.render(<RandomFortune />, document.getElementById("root"));
