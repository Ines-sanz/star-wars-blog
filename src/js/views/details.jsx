import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import peopleBg from "../../img/bg-char.png";
import vehicBg from "../../img/bg-vehic.png";
import planetBg from "../../img/bg-planet.png";
import { PeopleDetails } from "../component/peopleDetails.jsx";

import "../../styles/detail.css"

export const Details = () => {
  const { type, uid } = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => (
    actions.getSingle(type, uid)
  ), [])

  const backgroundImages = {
    people: peopleBg,
    vehicles: vehicBg,
    planets: planetBg
  };


  return (
    <div className="detailsContainer d-flex justify-content-center"
      style={{
        backgroundImage: `url(${backgroundImages[type]})`
      }}
    >
      {type === 'people' && <PeopleDetails 
      name={store.details?.properties?.name}
      key= {uid}
      img={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
      height={store.details?.properties?.height}
      mass={store.details?.properties?.mass}
      hair_color={store.details?.properties?.hair_color}
      skin_color={store.details?.properties?.skin_color}
      eye_color={store.details?.properties?.eye_color}
      birth_year={store.details?.properties?.birth_year}
      gender={store.details?.properties?.gender}
      />}
      {type === 'vehicles' && <>VehicDetails</>}
      {type === 'planets' && <>PlanetDetails</>}
    </div>
  );
};
