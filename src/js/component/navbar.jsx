import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router";

import "../../styles/navbar.css";

import home from "../../img/home-icon.png";
import logo from "../../img/logo.png";
import Pointer from "../../img/cursor-pointer.png";
import { Context } from "../store/appContext";


export const Navbar = () => {
  const {store, actions} = useContext(Context)
  const navigate = useNavigate();
  const handleLinkHome = () => {
    navigate(`/`);
  };
  const handleLink = (props) => {
    navigate(`/details/${props.type}/${props.uid}`)
  }

  return (
    <div className="navbar fixed-top d-flex justify-content-between">
      <img
      style={{ cursor: `url(${Pointer}) 16 16, auto` }}
        src={home}
        alt="Home"
        className="home-icon"
        onClick={handleLinkHome}
      />

      <img
        src={logo}
        alt="Home"
        className="navbar-logo"
        onClick={handleLinkHome}
      />

      <div className="dropdown" >
        <a
        style={{ cursor: `url(${Pointer}) 16 16, auto` }}
          className="btn nav-button dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="fa-solid fa-star "></span>
        </a>

        <ul className="dropdown-menu nav-dropdown">
          {store.favorites?.length > 0 ? (
            store.favorites.map((fav) => (
              <li key={fav.uid} className="d-flex align-items-center justify-content-between">
                <a
                  className="dropdown-item flex-grow-1"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(); 
                    handleLink(fav);
                  }}
                >
                  {fav.name} 
                  
                </a>
            
                 <span className="fa-solid fa-x me-3" onClick={() => actions.toggleFav(fav)}></span>
            
              </li>
            ))
          ) : (
            <li>
              <span className="dropdown-item">No favorites</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
