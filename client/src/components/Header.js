import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const common = {
        marginRight: 15,
        fontSize: 17,
        letterSpacing: ".5px",
        color: "white"
    };

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="md"> {/* expand="md" makes it responsive from md and down */}
                <Container>
                    <Navbar.Brand>
                        <Nav.Link href="#home" style={{ color: "#f8f9fa", fontSize: 24 }}>Debayan</Nav.Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* Hamburger icon */}
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto"> {/* Push nav to right */}
                            <NavLink to="/" className="text-decoration-none" style={common}>Home</NavLink>
                            <NavLink to="/about" className="text-decoration-none" style={common}>About</NavLink>
                            <NavLink to="/playlist" className="text-decoration-none" style={common}>Projects</NavLink>
                            <NavLink to="/contact" className="text-decoration-none" style={common}>Contact</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
