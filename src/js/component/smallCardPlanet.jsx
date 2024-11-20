import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router";
import "../../styles/index.css";
import "../../styles/smallCard.css";
import Pointer from "../../img/cursor-pointer.png";

export const PlanetChar = (props) => {
  const navigate = useNavigate();
  const handleLink = () => {
    navigate(`/details/${props.type}/${props.uid}`);
  };

  return (
    <div className="col-10 col-md-4 col-lg-3 m-3">
      <div className="glass" onClick={handleLink}>
        <div>
          <figure className="smallCard planetSmall">
            <img className="img-fluid" src={props.img} alt={props.name} />
            <div className="d-flex justify-content-between align-baseline px-3 planetInfoSmCard">
              <h3 className="smallCardTitle overflow-hidden">{props.name}</h3>
              <span
                className="fa-solid fa-star generalIcon"
                style={{ cursor: `url(${Pointer}) 16 16, auto` }}
              ></span>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};
