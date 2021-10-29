import React, { Component } from 'react';
 import Footer from "./Footer";
 import Header from "./Header";
import { Redirect } from "react-router-dom";

class Wrapper extends Component {
  render() {
    const { children, ...props } = this.props;
    let login = true;
    if (!login) {
      return <Redirect to="/login" />
    }
    return (
      <div {...props}>
        <Header />
        {children}
         <Footer color="red" /> 
      </div>
    );
  }
}

export default Wrapper;
