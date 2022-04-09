class Weather extends React.Component {
  constructor() {
    super();
    // this.state = {isHot: true};
    this.changeWeather = this.changeWeather.bind(this);
  }

  state = {isHot: true};

  changeWeather() {
    // this.state.isHot = !this.state.isHot;
    console.log(this);
  }

  onClick=() => {
    console.log(this);
    this.setState({isHot: !this.state.isHot});
    // this.state.isHot = !this.state.isHot;
  }

  render() {
    console.dir(this);
    return (
      <div>
        <h1>Weather</h1>
        {/* <p onClick={this.changeWeather}>The weather is {this.state.isHot ? 'hot' : 'cool'}</p> */}
        <p onClick={this.onClick}>The weather is {this.state.isHot ? 'hot' : 'cool'}</p>
      </div>
    );
  }
}

const weatherComponent = <Weather></Weather>;

ReactDOM.render(weatherComponent, document.querySelector("#root"));
