import React from "react";
import "./Item.css";
class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increaseHandler = () => {
    this.setState({ count: this.state.count + 1 });
    this.props.inc(this.props.title, this.props.price);
  };
  decreaseHandler = () => {
    if (this.state.count == 0) {
      this.setState({ count: 0 });
    } else {
      this.setState({ count: this.state.count - 1 });
      this.props.dec(this.props.title, this.props.price);
    }
  };
  render() {
    return (
      <div className="item_Container">
        <div className="img_Title">
          <img src={this.props.src} />
          <div className="title-Price">
            <h2 className="title">{this.props.title}</h2>
            <h5 className="price">({this.props.price})</h5>
          </div>
        </div>
        <div className="counter_controls">
          <button onClick={this.increaseHandler}>+</button>
          <p>{this.state.count}</p>
          <button onClick={this.decreaseHandler}>-</button>
        </div>
      </div>
    );
  }
}
export default Item;
