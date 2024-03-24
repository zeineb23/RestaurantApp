import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{ zIndex: 3 }}>
        <Container>
          <Navbar.Brand href="/">RestoFinder</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="nav-link" href="/">Home</Nav.Link>|
            <NavDropdown title="Restaurants" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <Nav.Link className="nav-link" href="/maps">Restaurants Near</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Nav.Link className="nav-link" href="/restos">Our Restaurants</Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>|
            <Nav.Link className="nav-link" href="/menus">Our Menu</Nav.Link>|
            <Nav.Link className="nav-link" href="/chefs">Our Chefs</Nav.Link>|
            <Nav.Link className="nav-link" href="/feedback">Feedbacks</Nav.Link>|
            <Nav.Link className="nav-link" href="/contact">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>

  );
}
