import React from "react";
import Container from "./partials/Container";
import { connect } from "react-redux";

@connect(({auth}) => ({auth}))
class Account extends React.Component {
  render () {
    return (
      <Container>
        <h1>Account page</h1>
      </Container>
    );
  }
}

export default Account;
