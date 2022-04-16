class Life extends React.Component {
  constructor(props) {
    super(props);
    // Initial state
    this.state = {
      opacity: 0.5,
    };
    console.log("constructor");
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.timer = setInterval(() => {
      let { opacity } = this.state;
      opacity -= 0.1;
      if (opacity <= 0) {
        opacity = 1;
      }
      this.setState({ opacity });
    }, 200);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timer);
  }

  // Must return a boolean
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate");
  }

  // Will be called after sub component's props are updated
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
  }

  death = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  };
  render() {
    console.log("render");
    return (
      <div>
        <h2 style={{ opacity: this.state.opacity }}>Life Cycle</h2>
        <button onClick={this.death}>unmount</button>
      </div>
    );
  }
}

ReactDOM.render(<Life />, document.getElementById("root"));
