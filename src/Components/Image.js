import React, { Component } from "react";
import getShibe from "./functions/functions";

class Image extends Component {
  fetchShibe = () => {
    getShibe();
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.fetchShibe();
  };

  render() {
    return (
      <div>
        <input type="button" value="many doge" onClick={this.fetchShibe}></input>
      </div>
    );
  }
}

export default Image;
