import React, {Component} from "react";
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";



export default class Header extends Component{

    render(){
        return(
            <Navbar bg="light" expand="sm">
                <Container>
                    
                    
                    <Navbar.Brand href="#" className="myName">Arshia Kalkhorani</Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        
                        <NavDropdown title="Quick Access" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#footer">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                                <NavDropdown.Item    
                                onClick={() => {navigator.clipboard.writeText("arshiabdol@gmail.com")}}>
                                    Copy Email To ClipBoard</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
            // <nav class="navbar navbar-expand navbar-light">
        // <a class="myName navbar-brand" href="#">Arshia Kalkhorani</a>
        //     <div class="collapse navbar-collapse" id="navbarNav">
        //         <ul class="navbar-nav">
                    
        //             <li class="nav-item">
        //                 <a class="nav-link navbar-button" href="#">Skills</a>
        //             </li>
        //             <li class="nav-item">
        //                 <a class="nav-link navbar-button" href="#">Experiences</a>
        //             </li>
        //             <li class="nav-item">
        //                 <a class="nav-link navbar-button" href="#">Contact</a>
        //             </li>

        //             <li>
        //             </li>
        //         </ul>
                
        //     </div>
        // </nav>


        )
    }

    



}

