class FormExample extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
    };
  }

  // This is a higher order function
  saveFormData(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    const { name, password } = this.state;
    alert(`user name is: ${name}, password is: ${password}.`);
  };

  render() {
    return (
      <form action="www.baidu.com" method="get" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={this.saveFormData("name")}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={this.saveFormData("password")}
        />
        <br />
        <input type="submit" />
      </form>
    );
  }
}

ReactDOM.render(<FormExample />, document.getElementById("root"));
