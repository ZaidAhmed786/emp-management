import React from "react";
import Profile from "../../../assets/profile.jpg";
import { useDispatch } from "react-redux";
import { authSlice } from "../../../store/slices/AuthSlice";
import { MdOutlineNotifications } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, NavDropdown } from "react-bootstrap";
const TopNavbar = () => {
  const logout = authSlice.actions.logout;
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <Navbar expand="lg" className="bg-light fixed-top" >
      <Container>
        <Navbar.Brand href="/">Leilani Tech</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto my-2 my-lg-0 center-align-item"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">
              {" "}
              <MdOutlineNotifications
                style={{
                  fontSize: "1.5rem",
                  color: "#707070",
                  cursor: "pointer",
                }}
              />
            </Nav.Link>
            <Nav.Link href="#action1">
              <AiOutlineLogout
                style={{ fontSize: "1.5rem", color: "red", cursor: "pointer" }}
                onClick={logoutHandler}
              />
            </Nav.Link>
            <Nav className="profile">
              <img src={Profile} alt="" className="bg-light" />
            </Nav>
            <NavDropdown title=" John Doe" id="navbarScrollingDropdown">
              <NavDropdown.Item href="profile">profile</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
