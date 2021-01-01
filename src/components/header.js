import React from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import Container from "react-bootstrap/Container"

export default (props) => {
  return (
    <header>
      <div style={{ marginTop: "20px", textAlign: "center", marginBottom: "20px" }}>
        <h1>Rallentando</h1>
        <p>For a little more happy life.</p>
      </div>
      <div style={{ backgroundColor: "#f8f9fa" }}>
        <Container>
          <Navbar expand="lg">
            <Navbar.Brand href="#home">Rallentando</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar> 
        </Container>
      </div>
    </header>
  )
}
