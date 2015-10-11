import React, { PropTypes } from "react";
import { Grid, Navbar, NavItem, Nav, NavBrand } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { AuthModals } from "../../auth/index";

if (!global.__SERVER__) {
  require("../../styles/main.scss");
}

class Container extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    return (
      <div className="wrapper">
        <Navbar className="main-nav">
          <LinkContainer to="/">
            <NavBrand>Redux Auth</NavBrand>
          </LinkContainer>
          <Nav>
            <LinkContainer to="/">
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

        <AuthModals />
      </div>
    );
  }
}

export default Container;
