import React from "react";
import { connect } from "react-redux";

@connect(({auth}) => ({auth}))
class Account extends React.Component {
  render () {
    return (
      <div>
        <h1>Account page</h1>
        <p>This page should only visible to authenticated users.</p>
      </div>
    );
  }
}

export default Account;
