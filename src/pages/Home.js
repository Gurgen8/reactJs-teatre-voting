import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <h1>Home</h1>
        <Link to="/hall">Hall</Link>
        <br/>
        <Link to="/settings">setting</Link>
        <br/>
        <Link to="/settings/wifi">setting wifi</Link>
        <br/>
        <Link to="/settings/user">setting user</Link>
        <br/>
        <Link to="/settings/password">setting password</Link>
      </Wrapper>
    );
  }
}

export default Home;
