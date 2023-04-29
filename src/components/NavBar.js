import React from "react";
import { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Link
          to="BasicChatApp"
          className="nav-link"
          onClick={() => setExpanded(false)}
        >
          <Navbar.Brand>Ben's Basic Chat App</Navbar.Brand>
        </Link>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav navbarScroll>
            <Link
              to="/"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              FirstComponent
            </Link>
            <Link
              to="/SecondComponent"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              SecondComponent
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
