import React, {Component} from "react";
import $ from "jquery";



export default class Header extends Component{

    render(){
        return(
        <nav class="navbar navbar-expand navbar-light">
        <a class="myName navbar-brand" href="#">Arshia Kalkhorani</a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    
                    <li class="nav-item">
                        <a class="nav-link navbar-button" href="#">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link navbar-button" href="#">Experiences</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link navbar-button" href="#">Contact</a>
                    </li>

                    <li>
                    </li>
                </ul>
                
            </div>
        </nav>


        )
    }

    



}

