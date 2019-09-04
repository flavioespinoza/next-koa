import React, { Component } from "react";
import fetch from "isomorphic-fetch";

export default class ComponentA extends Component {
  state = {};

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  async componentWillMount() {
    const response = await fetch("http://localhost:3000/test");
    const data = await response.json();
		console.log("data_____", data);
		await this.setStateAsync({ redirect_url: data.redirect_url });
		window.location.href = data.redirect_url
  }

  render() {
    return <div>{JSON.stringify(this.state)}</div>;
  }
}
