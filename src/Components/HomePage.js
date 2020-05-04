import React, { Component } from "react";
import Header from "../Components/Header";
import Description from "./Description";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        <Description />
      </div>
    );
  }
}

export default HomePage;
