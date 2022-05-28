import React from 'react';
import { Navbar, Nav, Container , NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavHeader(){
return(
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Venda de Ingressos</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/categorias">Categorias</Nav.Link>
        <Nav.Link href="/eventos">Eventos</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>)
}

export default NavHeader;