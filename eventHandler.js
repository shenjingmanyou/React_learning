class MyComponent extends React.Component {
  render() {
    return (
      <h1>
        hello world!
      </h1>
    )
  }
}

ReactDOM.render(<MyComponent />, document.querySelector("#root"));
