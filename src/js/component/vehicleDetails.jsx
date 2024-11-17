import React from "react";
import starship from "../../img/starship-icon.png";
import vehicle from "../../img/vehicle-icon.png";

export const VehicleDetails = () => {
  return (
    <div className="col-12 col-lg-10 justify-content-center">
      <div className="p-3 glass row g-0 justify-content-center">
        <figure className="col-10 col-lg-4">
          <img
            className="img-fluid detailImg"
            src={props.img}
            
          />
        </figure>
        <div className="col-12 col-lg-8">
          <div className="detailTitle col-12 col-lg-11 d-flex justify-content-between px-4 mt-2">
            <h3>name</h3>
            <span className="fa-solid fa-star cardIcon"></span>
          </div>
          <div className="glassDetail col-12 col-lg-11 ps-4 p-3">
            <div className="d-flex align-items-center">
              <div className="  col-11 d-flex align-items-end">
                <p className="detailSubtitle ">Model</p>
                <div className="divider  col-2 col-lg-6"></div>
                <p className="birthYear">model</p>
              </div>
            </div>
            <div className=" row detailsInfo">
              <div className="col-12 col-lg-5">
              <p>
                  <span className="detailSubtitle">
                    <span className="fa-solid fa-caret-right arrow"></span>{" "}
                   Class:{" "}
                  </span>
                  class
                </p>
                <p>
                  <span className="detailSubtitle">
                    <span className="fa-solid fa-caret-right arrow"></span>{" "}
                   Manufactured{" "}
                  </span>
                  manufactured
                </p>
                <p>
                  <span className="detailSubtitle">
                    <span className="fa-solid fa-caret-right arrow"></span>{" "}
                    Cost:{" "}
                  </span>{" "}
                  cost
                </p>
              </div>
              <div className="col-12 col-lg-7">
                <p>
                  <span className="detailSubtitle">
                    <span className="fa-solid fa-caret-right arrow"></span> Length:{" "}
                  </span>
                  length
                </p>
                <p>
                  <span className="detailSubtitle">
                    <span className="fa-solid fa-caret-right arrow"></span> Cargo:{" "}
                  </span>
                 cargo
                </p>
              
              </div>
            </div>
          </div>{" "}
          <div className="row detailsPlusInfo">
            <div className=" col-5">
            <p>
                  <span className="detailSubtitle">
                    <span className="fa-solid fa-caret-right arrow"></span> Max speed:{" "}
                  </span>
                  speed
                </p>
                <p>
                  <span className="detailSubtitle">
                    <span className="fa-solid fa-caret-right arrow"></span> Consumables:{" "}
                  </span>
                  consumables
                </p>
                
            </div>
            <div className="col-7">
            <p>
                  <span className="detailSubtitle">
                    <span className="fa-solid fa-caret-right arrow"></span> Crew:{" "}
                  </span>
                crew
                </p>
                <p>
                  <span className="detailSubtitle">
                    <span className="fa-solid fa-caret-right arrow"></span> Passengers:{" "}
                  </span>
                 passengers
                </p></div>
          </div>
        </div>
      </div>
    </div>
  );
};
