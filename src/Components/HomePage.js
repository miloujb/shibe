import React, { Component } from "react";
import Header from "../Components/Header";
import Description from "./Description";
import Image from "./Image";
import Footer from "./Footer";

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
        <Footer />
      </div>
    );
  }
}

export default HomePage;
