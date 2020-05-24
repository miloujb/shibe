import React, { Component } from "react";
import Header from "../Components/Header";
import Description from "./Description";
import Image from "./Image";

class HomePage extends Component {
  state = {
    data: [],
  };
  render() {
    return (
      <div>
        <Header />
        <Description />
        <Image />
      </div>
    );
  }
}

export default HomePage;
