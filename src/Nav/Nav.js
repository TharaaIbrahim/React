import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
const Nav = (props) => {
  return (
    <div className="nav_Style">
      <label>
        <a href="/">Yummy</a>
      </label>
      <div className="total_Count">
        <Link to={{ pathname: "check", totalCount: props.totalCount }}>
          Check
        </Link>
        <Link to="register"> Register </Link>
        <h4>Your Itemes: {props.totalCount}</h4>
      </div>
    </div>
  );
};

export default Nav;
