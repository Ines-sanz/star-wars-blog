import React from "react";
import "../../styles/detail.css";
import vehicle from "../../img/vehicle-icon.png";
import credits from "../../img/credits-icon.png";

export const VehiclesDetails = (props) => {
  return (
    <div className="col-12 col-lg-10 justify-content-center mt-5">
      <div className="p-3 glass row g-0 justify-content-center">
        <figure className="col-11 col-lg-4">
          <img
            className="img-fluid detailImg"
            src={props.img}
            alt={props.name}
          />
        </figure>
        <div className="col-12 col-lg-7">
          <div className="detailTitle col-12 col-lg-11 d-flex justify-content-between px-4 mt-2">
            <h3>{props.name}</h3>
            <span className="fa-solid fa-star generalIcon"></span>
          </div>
          <div className="detailGlass col-12 col-lg-11 ps-4 p-3 text-start">
            <img
              className="peopleIcon vehicleIcon"
              src={vehicle}
              alt="vehicle"
            />
            <div className="d-flex align-items-center">
              <p className="birthYear text-uppercase">{props.model}</p>
            </div>
            <div className="row d-flex">
              <p className="small  ">
                {props.manufacturer}
              </p>
            </div>
            <div className=" row detailsInfo">
              <div className="col-12 col-lg-5">
                <p>
                  <span className="detailSubtitle">
                    <span className="fa-solid fa-caret-right arrow"></span>{" "}
                  </span>
                  {props.vehicle_class}
                </p>
              </div>
              <div className="col-12 col-lg-7">
                <p>
                  <span className="detailSubtitle">
                    <span className="fa-solid fa-caret-right arrow"></span>{" "}
                    Cost:{" "}
                  </span>{" "}
                  {props.cost_in_credits}{" "}
                  <span className="detailSubtitle">
                    {" "}
                    <img className="peopleIcon" src={credits} alt="credits" />
                  </span>
                </p>
              </div>
            </div>
          </div>{" "}
        </div>
        <div className="row detailsPlusInfo">
          <div className=" col-12 col-md-4 col-lg-3">
            <p>
              <span className="detailSubtitleSmall">
                <span className="fa-solid fa-caret-right arrow"></span> Crew:{" "}
              </span>
              {props.crew}
            </p>
            <p>
              <span className="detailSubtitle">
                <span className="fa-solid fa-caret-right arrow"></span>{" "}
                Passengers:{" "}
              </span>
              {props.passengers}
            </p>
          </div>
          <div className="col-12 col-md-5 col-lg-4">
            <p>
              <span className="detailSubtitle">
                <span className="fa-solid fa-caret-right arrow"></span> Max
                speed:{" "}
              </span>
              {props.max_atmosphering_speed}{" "}
              <span className="detailSubtitle">km/h</span>
            </p>
            <p>
              <span className="detailSubtitle">
                <span className="fa-solid fa-caret-right arrow"></span> Consum:{" "}
              </span>
              {props.consumables}
            </p>
          </div>

          <div className="col-12 col-md-7 col-lg-5">
            <p>
              <span className="detailSubtitle">
                <span className="fa-solid fa-caret-right arrow"></span> Length:{" "}
              </span>
              {props.length} <span className="detailSubtitle">m</span>
            </p>
            <p>
              <span className="detailSubtitle">
                <span className="fa-solid fa-caret-right arrow"></span> Cargo:{" "}
              </span>
              {props.cargo_capacity}{" "}
              <span className="detailSubtitle">m/t</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
