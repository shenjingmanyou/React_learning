// class People extends React.Component {
//   static propTypes = {
//     name: PropTypes.string.required,
//     age: PropTypes.number
//   }

//   static defaultProps = {
//     name: 'jerry'
//   }

//   render() {
//     const {name, age, sex} = this.props;
//     return (
//       <h1>hello {name}, age is: {age+1}, sex is {sex}</h1>
//     );
//   }
// }

function People(props) {
  const {name, age, sex} = props;
  return (
    <h1>
      hello {name}, age is: {age}, sex is {sex}
    </h1>
  );
}

People.propTypes = {
  name: PropTypes.string.required,
  age: PropTypes.number,
};

People.defaultProps = {
  name: "jerry",
};

const peopleInfo = {
  name: "tom",
  age: 18,
  sex: "male",
};
ReactDOM.render(<People {...peopleInfo} />, document.querySelector("#root"));
