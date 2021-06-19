import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

import "./FooterPage.css"

class FooterPage extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col md="4">
              <h1 className="title">From <span>Home</span></h1>
              <p>find your next favorite books</p>
            </Col>
            <Col md="4">
            <h4 className="title">MENU</h4>
              <Nav>
                <NavItem>
                  <NavLink to="/" tag={Link}>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="" to="/saran" tag={Link}>
                    Saran
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="" to="/tentang" tag={Link}>
                    Tentang Kami
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="4">
              <h4 className="title">HUBUNGI KAMI</h4>
              <p>423, Apgujong-ro, Gangnam gu, Seoul</p>
              <p>(021) 098 082</p>
              <p>contact@fromhome.com</p>
              <div className="btn-wrapper">
              <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="#"
                  target="_blank"
                >
                  <i className="fab fa-twitter" />
                </Button>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="#"
                  target="_blank"
                >
                  <i className="fab fa-gitlab" />
                </Button>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="#"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </Button>             
              </div>
            </Col>
          </Row>
          <Row className="">
            <Col>
            {/* <hr/> */}
            {/* <p>copyright © 2020 - From Home</p> */}
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default FooterPage;
