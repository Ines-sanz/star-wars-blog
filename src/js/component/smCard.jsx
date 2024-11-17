import React, { useContext } from "react";
import "../../styles/index.css";
import { Navigate, useNavigate } from "react-router";
import { Context } from "../store/appContext";

export const SmChar = (props) => {
const {store, actions} = useContext(Context)
const navigate = useNavigate();
const handleLink = () => {
  navigate(`/details/${props.type}/${props.uid}`)
}

  return (
    <div className="col-10 col-md-4 col-lg-3  m-3">
      <div className="p-3 glass" onClick={handleLink}>
        <div>
          <figure className="myCard">
            <img className="img-fluid" src={props.img} alt={props.name} />
          </figure>
          <div className="d-flex justify-content-between align-baseline">
          <h3 className="cardTitle">{props.name}</h3>
          <span className="fa-solid fa-star cardIcon"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
