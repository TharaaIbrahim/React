import React from "react";
import { Link } from "react-router-dom";
import Sign from "../Sign/Sign";
import "./Form.css";
class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",
      password: "",
      repeat: "",
      msg: "",
    };
  }

  nameChangeHandler = (event) => {
    this.setState({ userName: event.target.value });
  };
  emailChangeHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  passwordHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  repeatPasswordHandler = (event) => {
    this.setState({ repeat: event.target.value });
  };

  submitHandler = (e) => {
    if (this.state.repeat === this.state.password) {
      this.setState({ msg: " " });
      localStorage.setItem("userData", JSON.stringify(this.state));
      window.location.href = "sign";
    } else {
      this.setState({ msg: "Password doesn`t match" });
    }
    e.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <form className="form_style" onSubmit={this.submitHandler}>
          <h2>Register</h2>
          <input
            type="text"
            placeholder="UserName"
            value={this.state.userName}
            onChange={this.nameChangeHandler}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.emailChangeHandler}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.passwordHandler}
            required
          />
          <input
            type="password"
            placeholder="Repeat-Password"
            value={this.state.repeat}
            onChange={this.repeatPasswordHandler}
            required
          />
          <p>{this.state.msg}</p>
          <button type="submit">Submit</button>
        </form>
      </React.Fragment>
    );
  }
}
export default Form;
