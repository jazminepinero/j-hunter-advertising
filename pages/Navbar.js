import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import styles from '../styles/Mission.module.css'




function NavBar() {
    return (
        <div>
        
        <Navbar className={styles.navBar} sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand  href="/">J Hunter Advertising</Navbar.Brand>
        <div className={styles.bar}>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
           
          <Nav.Link href="/">Home</Nav.Link>
          
          <Nav.Link href="/ContactUs">Contact us</Nav.Link>
          <Nav.Link href="/OurServices">Our Services</Nav.Link>
          <Nav.Link href="/About">About us</Nav.Link>
            
                      
           
            
          </Nav>
        
        </Navbar.Collapse>
        </div>
      </Navbar>
    
      </div>
    )
}

export default NavBar