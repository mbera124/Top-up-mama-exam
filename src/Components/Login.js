import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";
import swal from "sweetalert";
import { login } from "../utils";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      items: [],
      isLoggedIn: false,
    };
  }

  componentDidMount() {}

  inputChangehandler = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };
  VerifyLoginInfo = (e) => {
    e.preventDefault();
    console.log("Success:", "data");
    const { email, password } = this.state;
    const data = { email: email, password: password };
    this.props = data;
    console.log("data", data);
    const context = this;

    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("Success:", json.token);
        let params = json.token;
        login(params);
        swal("Successfully LoggedIn");
        context.setState({
          isLoggedIn: true,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  render() {
    if (this.state.isLoggedIn) {
      return <Redirect to="/Dashboard" />;
    }
    return (
      <div>
        <div className=" container-fluid login">
          <form>
            <h1>Log in</h1>
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              placeholder="Email..."
              onChange={this.inputChangehandler}
              required
            ></input>
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              placeholder="Password..."
              onChange={this.inputChangehandler}
              required
              minLength="8"
            ></input>
            <button className="submit-btn1" onClick={this.VerifyLoginInfo}>
              Login
            </button>
            <p>
              <span className="accountlabel">Don't have an account ? </span>
              &nbsp;&nbsp;&nbsp;
              <NavLink to="/Signup" exact={true} activeClassName="is-active">
                <strong className="strong">SignUp</strong>
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
