// function Demo() {
//   return (
//     <div id="container">
//       <h1>hello</h1>
//       <h1>world!</h1>
//     </div>
//   );
// }

class MyComponent extends React.Component {
  render() {
    return (
      <h1>hello React component!</h1>
    )
  }
}
// MyComponent.defaultProps = {name: 'React'};
const myComponent = <MyComponent></MyComponent>;

// ReactDOM.render(Demo(), document.querySelector('#root'));
// ReactDOM.render(<MyComponent></MyComponent>, document.querySelector('#root'));
ReactDOM.render(myComponent, document.querySelector('#root'));
