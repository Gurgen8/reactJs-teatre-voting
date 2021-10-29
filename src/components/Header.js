import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Header extends Component {
  handleClick = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <h2>header</h2>
        <button onClick={this.handleClick}>Go back</button>
      </div>
    );
  }
}

export default withRouter(Header);
