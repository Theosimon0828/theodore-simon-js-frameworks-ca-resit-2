import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';



const Heading = () => {
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">JS Frameworks Resit 2</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav-link-container">
            </Nav>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link nav-link-main">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link nav-link-main">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" className="nav-link nav-link-main">Contact</NavLink>
                </li>
            </ul>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
    );
}

export default Heading;