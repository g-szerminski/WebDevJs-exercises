class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "herbatka", active: true },
      { id: 2, name: "ziemniaczki", active: true },
      { id: 3, name: "kasza", active: false },
      { id: 4, name: "zupa wodna", active: false },
      { id: 5, name: "wrzątek", active: false },
      { id: 6, name: "chleb", active: true }
    ]
  };
  render() {
    return (
      <>
        <Header items={this.state.items} />
        <ListItems items={this.state.items} />
      </>
    );
  }
}
