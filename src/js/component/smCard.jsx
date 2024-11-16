import React from "react";
import "../../styles/character.css";
import "../../styles/index.css";

export const SmChar = (props) => {
  return (
    <div className="col-10 col-md-4 col-lg-3  m-3">
      <div className="p-3 glass">
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
