import React from "react";
import Item from "./Items/Item";
import Nav from "./Nav/Nav";
import "./App.css";
import Check from "./CheckOut/Check";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./Form/From";
import Sign from "./Sign/Sign";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      totalCount: "Empty",
      order: "",
      price: "",
    };
  }
  itemsInformation = [
    { src: "frenchFries.png", title: "French Fries", price: "1 JD" },
    { src: "burger.png", title: "Burger", price: "2 JD" },
    { src: "pepsi.png", title: "Pepsi", price: "0.30 JD" },
    { src: "sushi.png", title: "Sushi", price: "25 JD" },
  ];

  total_Inc = (title, price) => {
    if (this.state.totalCount === "Empty") {
      this.state.totalCount = 0;
    }
    this.setState({ totalCount: this.state.totalCount + 1 });
    this.setState({ order: this.state.order + " " + title });
    this.setState({ price: this.state.price + " " + price });
  };
  total_Dec = (title, price) => {
    this.setState({ totalCount: this.state.totalCount - 1 });
    console.log(this.state.totalCount);
    this.setState({ order: this.state.order });
    this.setState({ price: this.state.price });
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
      <Router>
        <div>
          <Nav totalCount={this.state.totalCount} />
          {/* <h2 className="order_Title">Make An Order</h2> */}
          <Routes>
            <Route path="/" element={this.items} />
            <Route
              path="check"
              element={
                <Check
                  totalCount={this.state.totalCount}
                  title={this.state.order}
                  price={this.state.price}
                ></Check>
              }
            />
            <Route path="register" element={<Form />} />
            <Route path="sign" element={<Sign />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
export default App;
