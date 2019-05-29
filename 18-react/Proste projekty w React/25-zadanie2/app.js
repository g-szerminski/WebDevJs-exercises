const Person = props => {
  return (
    <li>
      <span>{props.name}</span>
      <button onClick={props.delete}>Usuń</button>
    </li>
  );
};

class List extends React.Component {
  state = {
    people: [
      { id: 1, name: "Jan" },
      { id: 2, name: "Piotr" },
      { id: 3, name: "Marysia" },
      { id: 4, name: "John" }
    ]
  };

  //   handleDelete(id) {
  //     const people = [...this.state.people];
  //     const index = people.findIndex(person => id === person.id);
  //     // console.log(this, id);
  //     console.log(index);
  //     people.splice(index, 1);
  //     this.setState({
  //       people
  //     });
  //   }

  handleDelete(name) {
    // let people = Array.from(this.state.people);
    let people = this.state.people.slice();
    people = people.filter(item => name !== item.name);
    console.log(people);
    this.setState({
      people
    });
  }

  render() {
    const people = this.state.people.map(person => (
      <Person
        key={person.id}
        name={person.name}
        delete={this.handleDelete.bind(this, person.name)}
        // delete={this.handleDelete.bind(this, person.id)}
      />
    ));
    return <ul>{people}</ul>;
  }
}

ReactDOM.render(<List />, document.getElementById("root"));
//   <li key={person.id}>{person.name}</li>
