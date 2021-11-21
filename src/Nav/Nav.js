import React from "react";
import "./Nav.css";

const Nav = (props) => {
  return (
    <div className="nav_Style">
      <label>Yummy</label>
      <h4 className="total_Count">Your Itemes: {props.totalCount}</h4>
    </div>
  );
};

export default Nav;
