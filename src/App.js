import React from "react";
import Item from "./Items/Item";
import Nav from "./Nav/Nav";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      totalCount: "Empty",
    };
  }
  itemsInformation = [
    { src: "frenchFries.png", title: "French Fries", price: "1 JD" },
    { src: "burger.png", title: "Burger", price: "2 JD" },
    { src: "pepsi.png", title: "Pepsi", price: "0.30 JD" },
    { src: "sushi.png", title: "Sushi", price: "25 JD" },
  ];

  total_Inc = () => {
    if (this.state.totalCount === "Empty") {
      this.state.totalCount = 0;
    }
    this.setState({ totalCount: this.state.totalCount + 1 });
  };
  total_Dec = (count) => {
    this.setState({ totalCount: this.state.totalCount - 1 });
    console.log(this.state.totalCount);
    if (this.state.totalCount == 1) {
      this.setState({ totalCount: "Empty" });
    }
  };

  items = this.itemsInformation.map((user, id) => (
    <Item
      src={user.src}
      title={user.title}
      price={user.price}
      key={id}
      inc={this.total_Inc}
      dec={this.total_Dec}
    />
  ));

  render() {
    return (
      <div>
        <Nav totalCount={this.state.totalCount} />
        <h2 className="order_Title">Make An Order</h2>
        {this.items}
      </div>
    );
  }
}
export default App;
