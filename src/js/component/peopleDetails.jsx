import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useState, useEffect } from "react";

import "../../styles/detail.css";
import "../../styles/index.css";

import starship from "../../img/starship-icon.png";
import vehicle from "../../img/vehicle-icon.png";
import Pointer from "../../img/cursor-pointer.png";


export const PeopleDetails = (props) => {
  const { store, actions } = useContext(Context);
  const [planetName, setPlanetName] = useState("");
  const [charPlusInfo, setCharPlusInfo] = useState({
    vehicles: [],
    starships: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  const fetchPlanet = async () => {
    if (props.homeworld) {
      const name = await actions.getPlanet(props.homeworld);
      setPlanetName(name);
    }
  };

  const fetchCharPlusInfo = async () => {
    setIsLoading(true);
    if (props.url) {
      const result = await actions.getCharPlusInfo(props.url);
      setCharPlusInfo(result);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPlanet();
  }, [props.homeworld]);

  useEffect(() => {
    fetchCharPlusInfo();
  }, [props.url]);


  const handleFav = () => {
    const {name, uid, img, type } = props
    const newFav = {
        name, uid, img, type
    }
    actions. toggleFav(newFav)
  }
  
  const isFavorite = store.favorites.some(
    (fav) => fav.uid === props.uid && fav.type === props.type
  );
  
  return (
    <div className="col-12 col-lg-10 justify-content-center mt-3">
    <div className="p-3 glass row g-0 justify-content-center d-flex mx-0">
      <figure className="col-11 col-xl-4 text-center text-xl-end">
        <img
          className="img-fluid detail-img"
          src={props.img}
          alt={props.name}
        />
      </figure>
        <div className="col-12 col-xl-7 ms-lg-5 ms-0 ms-xl-0">
          <div className="detail-title col-12 col-lg-11 d-flex justify-content-between px-4 mt-2">
            <h3>{props.name}</h3>
            <span
                className="fa-solid fa-star general-icon"
                style={{ cursor: `url(${Pointer}) 16 16, auto`,opacity: isFavorite ? 1 : 0.4, }}  onClick={handleFav}
              ></span>
          </div>
          <div className="detail-glass col-12 col-lg-11  p-3">
            <div className="d-flex align-items-center">
              <div className="  col-11 d-flex align-items-end">
                <p className="detail-subtitle ">Born in</p>
                <div className="divider  col-2 col-lg-6"></div>
                <p className="birth-year">{props.birth_year}</p>
              </div>
              <div className="gender col-1 ms-2 text-center">
                {props.gender === "n/a" && (
                  <span className="fa-solid fa-genderless"></span>
                )}
                {props.gender === "male" && (
                  <span className="fa-solid fa-mars"></span>
                )}
                {props.gender === "female" && (
                  <span className="fa-solid fa-venus"></span>
                )}
              </div>
            </div>
            <div className=" row details-info">
              <div className="col-12 col-lg-5">
                <p>
                  <span className="detail-subtitle">
                    <span className="fa-solid fa-caret-right arrow"></span>{" "}
                    Height:{" "}
                  </span>
                  {props.height}
                </p>
                <p>
                  <span className="detail-subtitle">
                    <span className="fa-solid fa-caret-right arrow"></span>{" "}
                    Mass:{" "}
                  </span>{" "}
                  {props.mass}
                </p>
              </div>
              <div className="col-12 col-lg-7">
                <p>
                  <span className="detail-subtitle">
                    <span className="fa-solid fa-caret-right arrow"></span> Skin
                    color:{" "}
                  </span>
                  {props.skin_color}
                </p>
                <p>
                  <span className="detail-subtitle">
                    <span className="fa-solid fa-caret-right arrow"></span> Eye
                    color:{" "}
                  </span>
                  {props.eye_color}
                </p>
                <p>
                  <span className="detail-subtitle">
                    <span className="fa-solid fa-caret-right arrow"></span> Hair
                    color:{" "}
                  </span>
                  {props.hair_color}
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="row details-plus-info">
            <div className=" col-5">
            <p>
            <span className="fa-solid fa-caret-right arrow me-1"></span>
                {(() => {
                  if (isLoading) {
                    return "Loading...";
                  }
                  if (charPlusInfo.species.length > 0) {
                    return charPlusInfo.species.join(", ");
                  }
                  return "Human";
                })()}
              </p>
              <p>
                <span className="fa-solid fa-caret-right arrow me-1"></span>
                {planetName || (
                  <span className="details-plus-info">Loading...</span>
                )}
              </p>
            </div>
            <div className="col-12 col-xl-7 mt-3 mt-xl-0">
              <p>
                <img className="people-icon" src={vehicle} alt="vehicle"  />
                {(() => {
                  if (isLoading) {
                    return "Loading...";
                  }
                  if (charPlusInfo.vehicles.length > 0) {
                    return charPlusInfo.vehicles.join(", ");
                  }
                  return "No vehicles";
                })()}
              </p>
              <p>
                <img className="people-icon" src={starship} alt="starship" />
                {(() => {
                  if (isLoading) {
                    return "Loading...";
                  }
                  if (charPlusInfo.starships.length > 0) {
                    return charPlusInfo.starships.join(", ");
                  }
                  return "No starships";
                })()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
