import React from "react";
import "../../styles/detail.css";

import credits from "../../img/credits-icon.png";

export const StarshipsDetails = (props) => {
  return (
    <div className="col-12 col-lg-10 justify-content-center mt-5">
      <div className="p-3 glass row g-0 justify-content-center d-flex">
        <figure className="col-11 col-xl-4 text-center">
          <img
            className="img-fluid detail-img"
            src={props.img}
            alt={props.name}
          />
        </figure>
        <div className="col-12 col-xl-7 ms-lg-5 ms-0 ms-xl-0">
          <div className="detail-title col-12 col-lg-11 d-flex justify-content-between px-4 mt-2">
            <h3>{props.name}</h3>
            <span className="fa-solid fa-star general-icon"></span>
          </div>
          <div className="detail-glass col-12 col-lg-11 ps-4 p-3">
          
            <div className="d-flex align-items-center">
              <p className=" col-11 birth-year text-uppercase">{props.model}</p>
            </div>
            <div className="row d-flex">
              <p className="small ">
                {props.manufacturer}
              </p>
            </div>
            <div className=" row details-info">
              <div className="col-12 col-md-12 col-xl-6">
                <span className="detail-subtitle">
                    <span className="fa-solid fa-caret-right arrow"></span>{" "}
                    {props.starship_class}
                </span>
              </div>
              <div className="col-12 col-md-12 col-xl-6">
                <p>
                  <span className="detail-subtitle">
                    <span className="fa-solid fa-caret-right arrow"></span>{" "}
                    Cost:{" "}
                  </span>{" "}
                  {props.cost_in_credits}{" "}
                  <span className="detail-subtitle">
                    {" "}
                    <img className="people-icon" src={credits} alt="credits" />
                  </span>
                </p>
              </div>
            </div>
          </div>{" "}
        </div>
        <div className="row details-plus-info">
          <div className=" col-12 col-md-6 col-xl-3">
            <p>
              <span className="detail-subtitle">
                <span className="fa-solid fa-caret-right arrow"></span> Crew:{" "}
              </span>
              {props.crew}
            </p>
            <p>
              <span className="detail-subtitle">
                <span className="fa-solid fa-caret-right arrow"></span>{" "}
                Passengers:{" "}
              </span>
              {props.passengers}
            </p>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <p>
              <span className="detail-subtitle">
                <span className="fa-solid fa-caret-right arrow"></span> Max
                speed:{" "}
              </span>
              {props.max_atmosphering_speed}{" "}
              <span className="detail-subtitle">km/h</span>
            </p>
            <p>
              <span className="detail-subtitle">
                <span className="fa-solid fa-caret-right arrow"></span> Consum:{" "}
              </span>
              {props.consumables}
            </p>
          </div>
          <div className=" col-12 col-md-6 col-xl-3">
            <p>
              <span className="detail-subtitle">
                <span className="fa-solid fa-caret-right arrow"></span> Hyperdrive Rating:{" "}
              </span>
              {props.hyperdrive_rating}
            </p>
            <p>
              <span className="detail-subtitle">
                <span className="fa-solid fa-caret-right arrow"></span>{" "}
                MGLT:{" "}
              </span>
              {props.MGLT}
            </p>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <p>
              <span className="detail-subtitle-small">
                <span className="fa-solid fa-caret-right arrow"></span> Length:{" "}
              </span>
              {props.length} <span className="detail-subtitle-small">m</span>
            </p>
            <p>
              <span className="detail-subtitle-small">
                <span className="fa-solid fa-caret-right arrow"></span> Cargo:{" "}
              </span>
              {props.cargo_capacity}{" "}
              <span className="detail-subtitle-small">m/t</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
