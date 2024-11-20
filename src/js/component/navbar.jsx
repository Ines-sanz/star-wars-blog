import React from "react";
import { Navigate, useNavigate } from "react-router";

import "../../styles/navbar.css";

import home from "../../img/home-icon.png";
import logo from "../../img/logo.png";
import Pointer from "../../img/cursor-pointer.png";


export const Navbar = () => {
  const navigate = useNavigate();
  const handleLinkHome = () => {
    navigate(`/`);
  };

  return (
    <div className="navbar fixed-top d-flex justify-content-between">
      <img
      style={{ cursor: `url(${Pointer}) 16 16, auto` }}
        src={home}
        alt="Home"
        className="homeIcon"
        onClick={handleLinkHome}
      />

      <img
        src={logo}
        alt="Home"
        className="navbarLogo"
        onClick={handleLinkHome}
      />

      <div className="dropdown" >
        <a
        style={{ cursor: `url(${Pointer}) 16 16, auto` }}
          className="btn navButton dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="fa-solid fa-star "></span>
        </a>

        <ul className="dropdown-menu navDropdown">
          <li>
            <a className="dropdown-item" href="#" >
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
