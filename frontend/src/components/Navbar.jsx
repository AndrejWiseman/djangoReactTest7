import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigacija() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary bg-dark">
      <Container>
        <Navbar.Brand href="#">Django-React</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Pocetna</Nav.Link>
            <Nav.Link href="#">O nama</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">Social</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigacija;
