import React, { useContext } from "react";
import "../../styles/detail.css";
import rotation from "../../img/rota-icon.png";
import orbital from "../../img/orbital-icon.png";
import diameter from "../../img/diameter-icon.png";
import Pointer from "../../img/cursor-pointer.png";
import { Context } from "../store/appContext";

export const PlanetDetails = (props) => {
  const {store, actions} = useContext(Context)
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
      <div className="glass row g-0 justify-content-center ">
        <figure className=" col-10 col-md-7 col-xl-5 planet-figure" >
          <img
            className="img-fluid planet-img"
            src={props.img}
            alt={props.name}
          />
         
        </figure>
        <div className="col-11 col-xl-7 my-3 ms-lg-5 ms-0 ms-xl-0">
          <div className="detail-title col-12 col-lg-11 d-flex justify-content-between px-4 mt-2">
            <h3>{props.name}</h3>
            <span
                className="fa-solid fa-star general-icon"
                style={{ cursor: `url(${Pointer}) 16 16, auto`,opacity: isFavorite ? 1 : 0.4, }}  onClick={handleFav}
              ></span>
          </div>
        <div className="detail-glass col-12 col-lg-11  p-3">
            <div className=" row details-info">
              <div className="col-12">
                <p>
                  <span className="detail-subtitle">
                    <span className="fa-solid fa-caret-right arrow"></span>{" "}
                    Population:{" "}
                  </span>
                  {props.population}
                </p>
                <p>
                  <span className="detail-subtitle">
                    <span className="fa-solid fa-caret-right arrow"></span>{" "}
                    Gravity{" "}
                  </span>{" "}
                  {props.gravity}
                </p>
              </div>
              <div className="col-12">
                <p>
                  <span className="detail-subtitle">
                    <span className="fa-solid fa-caret-right arrow"></span> Climate:{" "}
                  </span>
                  {props.climate}
                </p>
                <p>
                  <span className="detail-subtitle">
                    <span className="fa-solid fa-caret-right arrow"></span> Terrain:{" "}
                  </span>
                  {props.terrain}
                </p>
        
            <p className="planet-info"> 
                  <span className="detail-subtitle"> <span className="fa-solid fa-caret-right arrow"></span>
                  {" "} surface water  {" "}
                  </span>
                  {props.surface_water} <span className="detail-subtitle">%</span>
                </p>
         
              </div>
            </div>
          </div>
        <div className="col-12 col-xl-11 pt-4 ps-5 row">
          
          <div className="col-12 col-xl-6 d-flex align-content-center">
           
            <p className="planet-info"> <img src={rotation} alt="" className="people-icon"/>
                  <span className="detail-subtitle">
                 Rotation P.   {" "}
                  </span>
                  {props.rotation_period} <span className="detail-subtitle">d</span>
                </p>
          </div>
          <div className="col-12 col-xl-6 d-flex align-content-center">
           
            <p className="planet-info"> <img src={orbital} alt="" className="people-icon"/>
                  <span className="detail-subtitle">
                 Orbital P.   {" "}
                  </span>
                  {props.orbital_period} <span className="detail-subtitle">d</span>
                </p>
          </div>
          <div className="col-12 col-xl-6 d-flex align-content-center">
          <p className="planet-info">
                  <span className="detail-subtitle">
                  <img src={diameter} alt="" className="people-icon"/>{" "}
                    Diameter:{" "}
                  </span>
                  {props.diameter} <span className="detail-subtitle">m</span>
                </p></div>
        </div>
      </div>
    </div>
    </div>
  );
};
