import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.css';


export const NavBar = () => {

    
    
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand><Link className="home" to="/">Tiendas Eclipse</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto centrado">
                <Nav.Link ><Link className="home" to="productos">Shop</Link></Nav.Link>    
                <Nav.Link ><Link className="home" to="productos/categorias/remeras">Remeras</Link></Nav.Link>    
                <Nav.Link ><Link className="home" to="productos/categorias/camisas">Camisas</Link></Nav.Link>    
                <Nav.Link ><Link className="home" to="productos/categorias/pantalones">Pantalones</Link></Nav.Link>    
                <Nav.Link ><Link className="home" to="productos/categorias/jeans">Jeans</Link></Nav.Link>    
                <Nav.Link ><Link className="home" to="productos/categorias/shorts">Shorts</Link></Nav.Link>              
                </Nav>
            </Navbar.Collapse>
            <CartWidget/>
            </Container>
            </Navbar>
        </header>
    )
}
