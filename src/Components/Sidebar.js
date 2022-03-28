import React from "react";
import "./Dashboard.css";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";
import { logout } from "../utils";
class Sidebar extends React.Component {
  logout = (e) => {
    logout();
    swal("Successfully Logout");
  };
  render() {
    return (
      <div>
        <div className="row sidebar">
          <div className="col-md-12 imageContainer1">
            <NavLink to="/Dashboard" exact={true} activeClassName="is-active">
              <button className=" btn btn-info commonButton">Dashboard</button>
            </NavLink>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12 imageContainer1">
            <NavLink
              to="/Dashboard/UserDetails"
              exact={true}
              activeClassName="is-active"
            >
              <button className=" btn btn-info commonButton">
                User Details
              </button>
            </NavLink>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12 imageContainer1 ">
            <NavLink to="/" exact={true} activeClassName="is-active">
              <button
                className="btn btn-danger commonButton"
                onClick={this.logout}
              >
                Logout
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
export default Sidebar;
