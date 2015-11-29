import React from "react";
import { PageHeader } from "react-bootstrap";
import { connect } from "react-redux";

class Account extends React.Component {
  render () {
    return (
      <div>
        <PageHeader>Account page</PageHeader>
        <p>This page should only visible to authenticated users.</p>
      </div>
    );
  }
}

export default connect(({auth}) => ({auth}))(Account);
