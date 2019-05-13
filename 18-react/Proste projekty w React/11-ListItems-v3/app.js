const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek"
    },
    {
      id: 2,
      age: 49,
      name: "Marta"
    },
    {
      id: 3,
      age: 19,
      name: "Stasia"
    }
  ]
};

const Item = ({ content }) => (
  <div>
    <h1>Użytkownik {content.name}</h1>
    <h2>Ma {content.age}</h2>
  </div>
);

class ListItems extends React.Component {
  // state = {
  //   items: ["jabłko", "sliwka", "gruszka"]
  // };
  render() {
    const users = this.props.data.users;
    const Items = users.map(item => <Item key={item.id} content={item} />);

    return <ul>{Items}</ul>;
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));
