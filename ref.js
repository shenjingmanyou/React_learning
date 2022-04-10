class CustomInputComponent extends React.Component {
  constructor() {
    super();
    this.textInput0 = React.createRef();
  }
  onConfirmClick = () => {
    console.dir(this);
    alert(`current.value: ${this.textInput0.current.value}`);
  }
  onBlur = () => {
    alert(`current.value: ${this.refs.textInput1.value}`);
  }

  render() {
    return (
      <div>
        <input ref={this.textInput0}></input>
        <button ref={el => this.btn = el} onClick={this.onConfirmClick}>confirm</button>
        <br></br>
        <br></br>
        <input ref="textInput1" onBlur={this.onBlur}></input>
      </div>
    );
  }
}

ReactDOM.render(<CustomInputComponent />, document.querySelector("#root"));
