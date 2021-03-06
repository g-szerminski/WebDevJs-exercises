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
  state = {
    select: 'all'
  };

handleUsersFilter(option){
  this.setState({
    select: option
  })
}

  usersList = () => {
    let users = this.props.data.users;
    switch(this.state.select) {
      case 'all':
        return users.map(item => <Item content={item} key={item.id} />);
      case 'male':
      users = users.filter(user => user.sex === 'male')
        return users.map(item => <Item content={item} key={item.id} />);
      case 'female':
        users = users.filter(user => user.sex === 'female')
        return users.map(item => <Item content={item} key={item.id} />);
      default:
        return 'coś się zepsuło'
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.handleUsersFilter.bind(this, 'all')}>Wszyscy</button>
        <button onClick={this.handleUsersFilter.bind(this, 'male')}>Mężczyźni</button>
        <button onClick={this.handleUsersFilter.bind(this, 'female')}>Kobiety</button>
        {this.usersList()}
      </div>
    );
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));
