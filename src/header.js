import React, {Component} from "react";



export default class Header extends Component{
     
    render(){
        return(
<nav class="navbar navbar-expand navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
        <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
        </li>
        </ul>
    </div>
</nav>
        )
    }
}

