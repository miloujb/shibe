import React, { Component } from "react";
import Header from "../Components/Header";
import Description from "./Description";
import Image from "./Image";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }
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
