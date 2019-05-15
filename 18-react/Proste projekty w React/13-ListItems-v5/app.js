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
  state = {};

  usersList = () => {
    let users = this.props.data.users;
    users = users.map(item => <Item content={item} key={item.id} />);
    return users;
  };

  render() {
    return (
      <div>
        <button>Wszyscy</button>
        <button>Mężczyźni</button>
        <button>Kobiety</button>
        {this.usersList()}
      </div>
    );
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));
