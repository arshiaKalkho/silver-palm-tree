import React, {Component} from "react";
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import ScrollTo from "./ScrollTo";



export default class Header extends Component{

    render(){
        return(
            
            
            
            <>
                <Navbar bg="dark" expand="md" sticky="top" variant="dark">
                <Navbar.Brand href="#" className="myName">Arshia Kalkhorani</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                
                <Nav>
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                    </Nav>
                    
                
                </Navbar.Collapse>
                </Navbar>
            </>
               
            
            
        
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            // <Navbar bg="light" expand="sm">
            //     <Container className="nav-container">
                    
                    
            //         <Navbar.Brand href="#" className="myName">Arshia Kalkhorani</Navbar.Brand>
                    
            //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
            //         <Navbar.Collapse id="basic-navbar-nav">
            //         <Nav className="me-auto">
                        
            //             <NavDropdown title="Quick Access" id="basic-nav-dropdown">
                                
            //                     <ScrollTo location={100000} text="About Me"/>
            //                     <ScrollTo location={100000} text="Experiences And Skills"/>
            //                     <ScrollTo location={100000} text="Contact Me"/>
            //                         <NavDropdown.Divider />
            //                     <NavDropdown.Item    
            //                     onClick={() => {navigator.clipboard.writeText("arshiabdol@gmail.com")}}>
            //                         Copy Email To ClipBoard</NavDropdown.Item>
            //             </NavDropdown>
            //         </Nav>
            //         </Navbar.Collapse>
            //     </Container>
            // </Navbar>
            
       
        )}

}
       