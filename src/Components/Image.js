import React, { Component } from "react";
import { getShibe } from "./functions/functions";

class Image extends Component {
  state = {
    img: [],
  };

  componentDidMount() {
    this.fetchShibe();
  }

  fetchShibe = () => {
    const { img } = this.state;
    getShibe().then((data) => {
      this.setState({ img: data[0] });
    });
  };

  refreshPage = () => {
    window.location.reload();
  };

  render() {
    const { img } = this.state;
    return (
      <div>
        <div className="img">
          <img src={img} alt="A Shibe" />
        </div>
        <button type="button" onClick={this.refreshPage}>
          Moar Doge
        </button>
      </div>
    );
  }
}

export default Image;
