import React from "react";
import "./Sign.css";

class Sign extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      msg: "",
    };
  }
  userData = JSON.parse(localStorage.getItem("userData"));
  nameChangeHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  passwordHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  submitHandler = (e) => {
    if (this.state.email !== this.userData.email) {
      this.setState({ msg: "You are not registered" });
    } else if (this.state.password !== this.userData.password) {
      this.setState({ msg: "Incorrect Password" });
    } else {
      this.setState({ msg: "" });
    }
    e.preventDefault();
  };

  render() {
    return (
      <form calssName="sign" onSubmit={this.submitHandler}>
        <h2>Sign-in</h2>
        <input
          type="text"
          placeholder="Email"
          value={this.state.email}
          onChange={this.nameChangeHandler}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.passwordHandler}
          required
        />
        <p>{this.state.msg}</p>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default Sign;
