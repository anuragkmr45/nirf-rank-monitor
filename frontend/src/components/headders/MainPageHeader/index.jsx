import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

// ** react bootstrap componenets
import { Navbar, Nav } from 'react-bootstrap';

// ** styles
import './style.css'

// ** data 
import { navbardata } from './data'

function Header() {
    const [scrolling, setScrolling] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const closeNavbar = () => setExpanded(false);

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            sticky="top"
            expanded={expanded}
            onToggle={() => setExpanded(!expanded)}
            className={`py-0 px-lg-5 px-2 my-0 fadeInDown ${scrolling ? 'navbar-scrolled' : ''}`}
            style={{ backgroundColor: scrolling ? 'rgba(2, 43, 58, 0.95)' : 'rgba(2, 43, 58)' }}
            data-bs-theme="dark"
        >
            <Navbar.Brand>
                {/* <img src={Logo} alt="CAREER DEVELOPMENT HUB" style={{ height: '8vh' }} /> */}
                <p>Logo</p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav>
                    {
                        navbardata.map((data, index) => {
                            return (
                                <Nav.Item key={index} className='my-auto' >
                                    <NavLink
                                        to={data.to}
                                        className="nav-link mx-1"
                                        onClick={() => {
                                            closeNavbar();
                                        }}
                                    >
                                        {data.title}
                                    </NavLink>
                                </Nav.Item>
                            )
                        })
                    }
                    <NavLink
                        to='/auth/login'
                        className="nav-link mx-1"
                        onClick={() => {
                            closeNavbar();
                        }}
                    >
                        Login
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;