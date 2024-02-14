import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{ zIndex: 3 }}>
        <Container>
          <Navbar.Brand href="#home">RestoFinder</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="nav-link" href="/">Home</Nav.Link>
            <Nav.Link className="nav-link" href="/menus">Our Menu</Nav.Link>
            <Nav.Link className="nav-link" href="/chefs">Our Chefs</Nav.Link>
            <Nav.Link className="nav-link" href="/feedback">Feedbacks</Nav.Link>
            <Nav.Link className="nav-link" href="/contact">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>

  );
}
