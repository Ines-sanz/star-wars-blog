import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router";
import "../../styles/index.css";
import "../../styles/smallCard.css";
import Pointer from "../../img/cursor-pointer.png";

export const SmChar = (props) => {
const navigate = useNavigate();
const handleLink = () => {
  navigate(`/details/${props.type}/${props.uid}`)
}

  return (
    <div className={props.type === 'people' ? "col-10 col-md-4 col-lg-3 m-3" : "col-10 col-md-6 col-lg-4 m-3"}>
      <div className="glass p-3 " onClick={handleLink}>
        <div>
          <figure className="smallCard">
            <img className="img-fluid" src={props.img} alt={props.name} />
          </figure>
          <div className="d-flex justify-content-between align-baseline">
          <h3 className="smallCardTitle overflow-hidden">{props.name}</h3>
          <span className="fa-solid fa-star generalIcon"  style={{ cursor: `url(${Pointer}) 16 16, auto` }}></span>
          </div>
        </div>
      </div>
    </div>
  );
};
