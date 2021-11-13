import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.css';


export const NavBar = () => {

    
    
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Tiendas Eclipse</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <NavDropdown title="WupperJeans" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Jeans</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Remeras</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Camisas</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Dulce Ironía" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Remeras</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Vestidos</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Camisas</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="BoraJeans" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Pantalones</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Jeans</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Camisas</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <CartWidget/>
            </Container>
            </Navbar>
        </header>
    )
}
