import React from "react";
import "../../styles/detail.css";
import vehicle from "../../img/vehicle-icon.png";
import credits from "../../img/credits-icon.png";

export const PlanetDetails = (props) => {
  return (
    <div className="col-12 col-lg-10 justify-content-center mt-3">
      <div className="glass row g-0 justify-content-center ">
        <figure className="col-5">
          <img
            className="img-fluid planetImg"
            src={props.img}
            alt={props.name}
          />
        </figure>
        <div className="col-11 col-lg-7 my-3">
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
            
              </div>
            </div>
          </div>{" "}
      </div>
    </div>
    </div>
  );
};
