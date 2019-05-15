const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
      sex: "male"
    },
    {
      id: 2,
      age: 49,
      name: "Marta",
      sex: "female"
    },
    {
      id: 3,
      age: 19,
      name: "Stasia",
      sex: "female"
    },
    {
      id: 4,
      age: 39,
      name: "Karol",
      sex: "male"
    }
  ]
};

const Item = ({ content }) => (
  <div className="userInfo">
    <h1>{content.name}</h1>
    <p>Inforamcje o użytkowniku:</p>
    <p>Wiek użytkownika: {content.age}</p>
    <p>Płeć: {content.sex}</p>
  </div>
);

class ListItems extends React.Component {
  // state = {
  //   items: ["jabłko", "sliwka", "gruszka"]
  // };
  render() {
    let users = this.props.data.users;
    users = users.filter(user => user.sex === "female");
    const Items = users.map(item => <Item key={item.id} content={item} />);

    return <ul>{Items}</ul>;
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));
