import React, { Component } from 'react';
import Footer from "./Footer";
import Header from "./Header";
import { Redirect } from "react-router-dom";

class WrapperLogOut extends Component {
  render() {
    const { children, ...props } = this.props;
    // let login = true;
    // if (login) {
    //   return <Redirect to="/" />
    // }
    return (
      <div {...props}>
        {children}
      </div>
    );
  }
}

export default WrapperLogOut;
