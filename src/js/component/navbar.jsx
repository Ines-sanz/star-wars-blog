import React from "react";
import home from "../../img/home-icon.png";
import logo from "../../img/logo.png";
import "../../styles/navbar.css";


export const Navbar = () =>{

    return (
        <div className="navbar fixed-top d-flex justify-content-between">
<img src={home} alt="Home" className="homeIcon" />


<img src={logo} alt="Home" className="navbarLogo" />

<div class="dropdown">
  <a class="btn myButton dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  <span className="fa-solid fa-star "></span>
  </a>

  <ul class="dropdown-menu myDropdown">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
        </div>


        
    )
}