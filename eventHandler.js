class MyComponent extends React.Component {

  onBlur = (e) => {
    alert(e.target.value);
  }
  render() {
    return (
      <div>
        <input type="text" onBlur={this.onBlur}></input>
      </div>
    );
  }
}


ReactDOM.render(<MyComponent />, document.querySelector("#root"));
