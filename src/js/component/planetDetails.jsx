import React from "react";
import "../../styles/detail.css";
import rotation from "../../img/rota-icon.png";
import orbital from "../../img/orbital-icon.png";
import diameter from "../../img/diameter-icon.png";

export const PlanetDetails = (props) => {
  return (
    <div className="col-12 col-lg-10 justify-content-center mt-3">
      <div className="glass row g-0 justify-content-center ">
        <figure className=" col-10 col-md-7 col-xl-5 planetFigure" >
          <img
            className="img-fluid planetImg"
            src={props.img}
            alt={props.name}
          />
         
        </figure>
        <div className="col-11 col-xl-7 my-3 ms-lg-5 ms-0 ms-xl-0">
          <div className="detailTitle col-12 col-lg-11 d-flex justify-content-between px-4 mt-2">
            <h3>{props.name}</h3>
            <span className="fa-solid fa-star generalIcon"></span>
          </div>
        <div className="detailGlass col-12 col-lg-11  p-3">
            <div className=" row detailsInfo">
              <div className="col-12">
                <p>
                  <span className="detailSubtitle">
                    <span className="fa-solid fa-caret-right arrow"></span>{" "}
                    Population:{" "}
                  </span>
                  {props.population}
                </p>
                <p>
                  <span className="detailSubtitle">
                    <span className="fa-solid fa-caret-right arrow"></span>{" "}
                    Gravity{" "}
                  </span>{" "}
                  {props.gravity}
                </p>
              </div>
              <div className="col-12">
                <p>
                  <span className="detailSubtitle">
                    <span className="fa-solid fa-caret-right arrow"></span> Climate:{" "}
                  </span>
                  {props.climate}
                </p>
                <p>
                  <span className="detailSubtitle">
                    <span className="fa-solid fa-caret-right arrow"></span> Terrain:{" "}
                  </span>
                  {props.terrain}
                </p>
        
            <p className="planetInfo"> 
                  <span className="detailSubtitle"> <span className="fa-solid fa-caret-right arrow"></span>
                  {" "} surface water  {" "}
                  </span>
                  {props.surface_water} <span className="detailSubtitle">%</span>
                </p>
         
              </div>
            </div>
          </div>
        <div className="col-12 col-xl-11 pt-4 ps-5 row">
          
          <div className="col-12 col-xl-6 d-flex align-content-center">
           
            <p className="planetInfo"> <img src={rotation} alt="" className="peopleIcon"/>
                  <span className="detailSubtitle">
                 Rotation P.   {" "}
                  </span>
                  {props.rotation_period} <span className="detailSubtitle">d</span>
                </p>
          </div>
          <div className="col-12 col-xl-6 d-flex align-content-center">
           
            <p className="planetInfo"> <img src={orbital} alt="" className="peopleIcon"/>
                  <span className="detailSubtitle">
                 Orbital P.   {" "}
                  </span>
                  {props.orbital_period} <span className="detailSubtitle">d</span>
                </p>
          </div>
          <div className="col-12 col-xl-6 d-flex align-content-center">
          <p className="planetInfo">
                  <span className="detailSubtitle">
                  <img src={diameter} alt="" className="peopleIcon"/>{" "}
                    Diameter:{" "}
                  </span>
                  {props.diameter} <span className="detailSubtitle">m</span>
                </p></div>
        </div>
      </div>
    </div>
    </div>
  );
};
