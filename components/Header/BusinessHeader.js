import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";

const BusinessHeader = styled.div`
  background-color: #fff !important;
  filter: drop-shadow(2px 2px 4px rgba(11, 2, 18, 0.0835337));
  display: flex;
  justify-content: center;
  align-items: center;
  .navigation {
    padding-top: 16px;
    padding-bottom: 16px;
  }
  .navbar-brand {
    color: #000;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      top: 12px;
      left: -25px;
      width: 20px;
      height: 20px;
      background-color: pink;
    }
  }
  .__link {
    color: #000 !important;
  }

  .navbar-toggler-icon {
    background-image: url("/images/header/burger-menu.svg");
  }
  .navbar-collapse {
    text-align: center;
  }
  /* remove-outline from button */
  .navbar-toggler {
    outline: none;
  }
`;

const RegisterBtn = styled.button`
  background-color: #35558f;
  width: 160px;
  height: 40px;
  display: block;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 18px;
  color: #fff;
  font-family: "Neue Haas Grotesk Display Pro Medium", sans-serif;
  position: relative;
  margin-right: 16px;
  outline: none;
  font-weight: bold;
  @media (max-width: 992px) {
    margin: 0 auto;
  }
  &:before {
    transition: 0.3s;
    opacity: 0;
    content: "";
    position: absolute;
    border-radius: 6px;
    top: -3px;
    right: -3px;
    bottom: -3px;
    left: -3px;
    border: 1px solid #35558f;
  }

  &:hover:before {
    opacity: 1;
  }
`;

const LogBtn = styled.button`
  width: 160px;
  height: 40px;
  margin-right: 16px;
  border: none;
  outline: none;
  border: 1px solid #35558f;
  border-radius: 5px;
  background-color: #fff;
  font-weight: bold;
  font-size: 16px;
  color: #35558f;
  @media (max-width: 992px) {
    margin: 0 auto 20px auto;
  }
`;
export default function BHeader() {
  return (
    <BusinessHeader>
      <Navbar collapseOnSelect expand="lg" className="navigation container">
        <Navbar.Brand href="#home">For businesses:</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features" className="__link">
              Sell
            </Nav.Link>
            <Nav.Link href="/pricing" className="__link">
              Pricing
            </Nav.Link>
            <Nav.Link href="#pricing" className="__link">
              Hashtags
            </Nav.Link>
            <Nav.Link href="#pricing" className="__link">
              How it works
            </Nav.Link>
            <Nav.Link href="#pricing" className="__link">
              For gifters
            </Nav.Link>
          </Nav>
          <Nav>
            <LogBtn>Log In</LogBtn>
            <RegisterBtn>Create Account</RegisterBtn>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </BusinessHeader>
  );
}
