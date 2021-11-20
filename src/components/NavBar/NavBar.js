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
                <Nav.Link ><Link className="home" to="/">Inicio</Link></Nav.Link>    
                <Nav.Link ><Link className="home" to="productos/categorias">Productos</Link></Nav.Link>    
                <Nav.Link ><Link className="home" to="productos/categorias/remera">Remeras</Link></Nav.Link>    
                <Nav.Link ><Link className="home" to="productos/categorias/camisa">Camisas</Link></Nav.Link>    
                <Nav.Link ><Link className="home" to="productos/categorias/pantalon">Pantalones</Link></Nav.Link>    
                <Nav.Link ><Link className="home" to="productos/categorias/jean">Jeans</Link></Nav.Link>    
                <Nav.Link ><Link className="home" to="productos/categorias/short">Shorts</Link></Nav.Link>              
                </Nav>
            </Navbar.Collapse>
            <CartWidget/>
            </Container>
            </Navbar>
        </header>
    )
}
