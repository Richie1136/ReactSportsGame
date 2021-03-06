
class Game extends React.Component {
  state = {
    venue: this.props.venue
  }
  
    render() {
      return (
      <React.Fragment>
        <h1 id = "venueName">Welcome to {this.props.venue}</h1>
        {/* <div className={this.props.className}></div> */}
       {/* <Team name={this.props.name} img ={this.props.logo} width="300px" /> */}
        <div id="vsDiv">VS</div>
  
      </React.Fragment>
      )
    }
  }
  
  
  function App(props){
    return (
      <React.Fragment>
   <Game venue="Kobe Bryant Arena" />
      <Team name="Lakers" logo ="./Kobe.png" className ="Lakers"  />
      <Team name="BlueDevils" logo ="./duke basketball.jpg" className ="Duke" />
    </React.Fragment>
  )
}

//Render the application
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
