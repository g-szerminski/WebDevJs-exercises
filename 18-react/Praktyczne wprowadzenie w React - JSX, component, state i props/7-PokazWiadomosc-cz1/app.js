class Message extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         messageIsActive: false
      }
      this.handleMessageButton = this.handleMessageButton.bind(this)
   }

   handleMessageButton() {
      this.setState({
         messageIsActive: !this.state.messageIsActive
      })
   }

   render() {
      console.log(this.state.messageIsActive);
      const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eum deserunt tempore dolor harum. Eligendi cumque repellendus debitis atque numquam doloribus, a, sit impedit quaerat voluptatem ex dolor, ea quia!'
      return (
         <>
             <button onClick={this.handleMessageButton}>
               {this.state.messageIsActive ? 'Ukryj' : 'Pokaż'}
             </button>
            {this.state.messageIsActive && <p>{text}</p>}
         </>
      )
   }
}
{/* <p>{this.state.messageIsActive && text}</p> */}
// {this.state.messageIsActive ? <p>{text}</p> : null}
ReactDOM.render(<Message/>, document.getElementById('root'));

