import React, { Component } from "react";
import Header from "../Components/Header";
import Description from "./Description";
import Image from "./Image";
import  getShibe  from "./functions/functions";

class HomePage extends Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const fetchedData = await getShibe();
    this.setState({ data: fetchedData });
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <Header data={data} />
        <Description />
        <Image />
      </div>
    );
  }
}

export default HomePage;
