import React from "react";
import "./Signup.css";
import swal from "sweetalert";
import { NavLink } from "react-router-dom";
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    };
  }
  // For Input filed
  InputChangeHandler = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };
  // For From Submission
  FormSubmitted = (e) => {
    e.preventDefault();
    const { first_name, last_name, email, password } = this.state;
    // Creating  localStorage for users
    // let users = localStorage.getItem("users");
    let users = [];
    if (!users) users = [];
    users = JSON.parse(users);
    const data = {
      first_name,
      last_name,
      email: email,
      password: password,
    };
    users.push(data);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(users),
    };
    fetch("https://reqres.in/api/users", requestOptions)
      .then((response) => response.json())
      .then(
        (data) => this.setState({ postId: data.id })
        // swal(" Detail Submitted Successfully")
      )
      .catch((error) => {});

    // localStorage.setItem("users", JSON.stringify(users));

    this.setState({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    });
    this.props.history.push("/");
  };

  render() {
    return (
      <div className=" container-fluid signup">
        <form className="formSignup" onSubmit={this.FormSubmitted.bind(this)}>
          <h1>SignUp</h1>
          <label className="label">First Name</label>
          <input
            type="text"
            name="first_name"
            placeholder="First name..."
            onChange={this.InputChangeHandler}
            value={this.state.first_name}
            required
          ></input>
          <label className="label">Last Name</label>
          <input
            type="text"
            name="last_name"
            placeholder="Last name..."
            onChange={this.InputChangeHandler}
            value={this.state.last_name}
            required
          ></input>
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email..."
            onChange={this.InputChangeHandler}
            value={this.state.email}
            required
          ></input>
          <label className="label"> Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password..."
            onChange={this.InputChangeHandler}
            value={this.state.password}
            minLength="8"
            required
          ></input>
          <button className="submit-btn" type="submit">
            Sign up
          </button>
          <p>
            <span>Already have an account ? </span>&nbsp;&nbsp;&nbsp;
            <NavLink to="/" exact={true} activeClassName="is-active">
              <strong className="strong">LogIn</strong>
            </NavLink>
          </p>
        </form>
      </div>
    );
  }
}
export default Signup;
