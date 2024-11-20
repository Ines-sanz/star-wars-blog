import React from "react";
import "../../styles/detail.css";
import starship from "../../img/starship-icon.png";
import credits from "../../img/credits-icon.png";

export const StarshipsDetails = (props) => {
  return (
    <div className="col-12 col-lg-10 justify-content-center mt-5">
      <div className="p-3 glass row g-0 justify-content-center d-flex">
        <figure className="col-11 col-xl-4">
          <img
            className="img-fluid detailImg"
            src={props.img}
            alt={props.name}
          />
        </figure>
        <div className="col-12 col-xl-7 ">
          <div className="detailTitle col-12 col-lg-11 d-flex justify-content-between px-4 mt-2">
            <h3>{props.name}</h3>
            <span className="fa-solid fa-star generalIcon"></span>
          </div>
          <div className="detailGlass col-12 col-lg-11 ps-4 p-3">
            <img
              className="peopleIcon vehicleIcon"
              src={starship}
              alt="starship"
            />
            <div className="d-flex align-items-center">
              <p className=" col-11 birthYear text-uppercase">{props.model}</p>
            </div>
            <div className="row d-flex">
              <p className="small ">
                {props.manufacturer}
              </p>
            </div>
            <div className=" row detailsInfo">
              <div className="col-12 col-md-12 col-xl-6">
                <span className="detailSubtitle">
                    <span className="fa-solid fa-caret-right arrow"></span>{" "}
                    {props.starship_class}
                </span>
              </div>
              <div className="col-12 col-md-12 col-xl-6">
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
          <div className=" col-12 col-md-6 col-xl-3">
            <p>
              <span className="detailSubtitle">
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
          <div className="col-12 col-md-6 col-xl-3">
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
          <div className=" col-12 col-md-6 col-xl-3">
            <p>
              <span className="detailSubtitle">
                <span className="fa-solid fa-caret-right arrow"></span> Hyperdrive Rating:{" "}
              </span>
              {props.hyperdrive_rating}
            </p>
            <p>
              <span className="detailSubtitle">
                <span className="fa-solid fa-caret-right arrow"></span>{" "}
                MGLT:{" "}
              </span>
              {props.MGLT}
            </p>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <p>
              <span className="detailSubtitleSmall">
                <span className="fa-solid fa-caret-right arrow"></span> Length:{" "}
              </span>
              {props.length} <span className="detailSubtitleSmall">m</span>
            </p>
            <p>
              <span className="detailSubtitleSmall">
                <span className="fa-solid fa-caret-right arrow"></span> Cargo:{" "}
              </span>
              {props.cargo_capacity}{" "}
              <span className="detailSubtitleSmall">m/t</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
