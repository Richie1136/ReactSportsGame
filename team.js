const swishFile = "./Swish.wav"
const backBoardFile = "./Back+Board.wav"

const swishSound = new Audio(swishFile);
const backBoardSound = new Audio(backBoardFile);

class Team extends React.Component {
state = {
  name: this.props.name,
  logo: this.props.logo,
  shotsTaken: 0,
  score: 0,
  shotPercentage: 0,
};


score = () => {
  this.setState((state) => ({score: state.score + 1 }));
};



addShots = () => {
  this.setState((state) => ({ shotsTaken: state.shotsTaken + 1 }));
let randomNumber = Math.floor(Math.random() * 4) + 1;
if (randomNumber === 1) {
  swishSound.play();
  this.score();
} else {
  backBoardSound.play();
}
this.shotPercentage()
}

shotPercentage = () => {
  this.setState((state) => { 
      let percentage = (state.score/state.shotsTaken) * 100;
    console.log(percentage)
    return ({...state, shotPercentage: percentage});
  
  })
}
  render() {
return (
  <React.Fragment>
  <div className = {this.props.className}>
    <h1>{this.props.name} </h1>
    <img src = {this.props.logo} width= "300px" />
    <p>Shots: {this.state.shotsTaken}</p>
    <p>Score: {this.state.score}</p>
{  this.state.shotsTaken > 0  &&  <p>shotPercentage: {this.state.shotPercentage}</p>
}    <button onClick={this.addShots}>Shoot!</button>
  </div>
</React.Fragment>
  );
  }
}

  