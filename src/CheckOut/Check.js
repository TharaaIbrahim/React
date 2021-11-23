import React from "react";
import "./Check.css";
class Check extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="check_Style">
        <h2>Total Items: {this.props.totalCount}</h2>
        <h2>{this.props.title}</h2>
        <h3>{this.props.price}</h3>
      </div>
    );
  }
}
export default Check;
