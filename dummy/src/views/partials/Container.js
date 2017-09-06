import React from "react";
import PropTypes from "prop-types";
import { Grid, Navbar, NavItem, Nav, Brand } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

if (!global.__SERVER__ && !global.__TEST__) {
  require("../../styles/main.scss");
}

class Container extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render () {
    return (
      <div className="wrapper">
        <Navbar className="main-nav">
          <LinkContainer to="/">
            <Navbar.Brand>Redux Auth</Navbar.Brand>
          </LinkContainer>
          <Nav>
            <LinkContainer to="/" onlyActiveOnIndex={true}>
              <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/account">
              <NavItem eventKey={2}>Account</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>

        <Grid className="content">
          {this.props.children}
        </Grid>
      </div>
    );
  }
}

export default Container;
