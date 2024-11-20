import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router";
import "../../styles/index.css";
import "../../styles/smallCard.css";
import Pointer from "../../img/cursor-pointer.png";
import { Context } from "../store/appContext";

export const PlanetChar = (props) => {
  const {store, actions} = useContext(Context)
  const navigate = useNavigate();
  const handleLink = () => {
    navigate(`/details/${props.type}/${props.uid}`);
  };
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
    <div className="col-10 col-md-4 col-lg-3 m-3">
      <div className="glass" >
        <div>
          <figure className="smallCard planetSmall">
            <img className="img-fluid" src={props.img} alt={props.name} onClick={handleLink}/>
            <div className="d-flex justify-content-between align-baseline px-3 planetInfoSmCard">
              <h3 className="smallCardTitle overflow-hidden" onClick={handleLink}>{props.name}</h3>
              <span
                className="fa-solid fa-star generalIcon"
                style={{ cursor: `url(${Pointer}) 16 16, auto`,opacity: isFavorite ? 1 : 0.4, }}  onClick={handleFav}
              ></span>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};
