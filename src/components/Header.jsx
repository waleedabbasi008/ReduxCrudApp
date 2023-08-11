import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import {HiUsers} from 'react-icons/hi';
import './Header.scss';


const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="navbar"> 
                <Container>
                    <Navbar.Brand href="/" className='text-light logo'><HiUsers  /> Users </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <NavLink to='/' className=' nav-item text-decoration-none text-light  fs-4' > Home </NavLink>
                        <NavLink to='/Create' className=' nav-item text-decoration-none text-light  fs-4' > New User </NavLink>
                        
                                                                                
                        </Nav>
                    </Navbar.Collapse>
                    <NavLink to='/' className='  fs-5 text-light text-decoration-none ' > <HiUsers className='cart' />    </NavLink>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;