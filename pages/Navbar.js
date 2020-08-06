import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import styles from '../styles/Mission.module.css'



function NavBar() {
    return (
        <>
        <Navbar className={styles.navBar} fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand  href="/">J Hunter Advertising</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link className={styles.navLink} href="/">Home</Nav.Link>
          
          <Nav.Link className={styles.navLink} href="/ContactUs">Contact us</Nav.Link>
          <Nav.Link className={styles.navLink} href="/OurServices">Our Services</Nav.Link>
          <Nav.Link className={styles.navLink} href="/About">About us</Nav.Link>
            
                      
           
            
          </Nav>
        
        </Navbar.Collapse>
      </Navbar>
      </>
    )
}

export default NavBar