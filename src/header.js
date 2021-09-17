import React, {Component} from "react";



export default class Header extends Component{

    render(){
        return(
        <nav class="navbar navbar-expand navbar-light bg-light">
        <a class="myName navbar-brand" href="#">Arshia A Kalkhorani</a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link navbar-button" href="#">Summery </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link navbar-button" href="#">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link navbar-button" href="#">Experiences</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link navbar-button" href="#">Contact Me</a>
                    </li>
                    
                    <li class="nav-item" >
                    </li>
                    <li>
                    </li>
                </ul>
                
            </div>
        </nav>


        )
    }
}

