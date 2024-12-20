import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import peopleBg from "../../img/bg-char.png";
import vehicBg from "../../img/bg-vehic.png";
import planetBg from "../../img/bg-planet.png";
import { Navbar } from "../component/navbar.jsx";
import { PeopleDetails } from "../component/peopleDetails.jsx";
import { VehiclesDetails } from "../component/vehicleDetails.jsx";
import { StarshipsDetails } from "../component/starshipsDetails.jsx";
import { PlanetDetails } from "../component/planetDetails.jsx";

import "../../styles/detail.css";

export const Details = () => {
  const { type, uid } = useParams();
  const { store, actions } = useContext(Context);
  const backgroundImages = {
    people: peopleBg,
    vehicles: vehicBg,
    starships: vehicBg,
    planets: planetBg,
  };


  useEffect(() => {
    actions.clearSingle();
    actions.getSingle(type, uid);
  }, [type, uid]);

  if (!store.details || !store.details.properties) {
    return <div
    style={{
      backgroundImage: `url(${backgroundImages[type]})`, height: `100vh`
    } } className="details-container d-flex justify-content-center align-items-center loading-div"
  >Loading...</div>;
  }


  return (
    <>
      <Navbar />
      <div
        className="details-container d-flex justify-content-center"
        style={{
          backgroundImage: `url(${backgroundImages[type]})`,
        }}
      >
  
        {type === "people" && (
          <PeopleDetails
            name={store.details?.properties?.name}
            url={store.details?.properties?.url}
            key={uid}
            uid={uid}
            type={type}
            img={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
            height={store.details?.properties?.height}
            mass={store.details?.properties?.mass}
            hair_color={store.details?.properties?.hair_color}
            skin_color={store.details?.properties?.skin_color}
            eye_color={store.details?.properties?.eye_color}
            birth_year={store.details?.properties?.birth_year}
            gender={store.details?.properties?.gender}
            homeworld={store.details?.properties?.homeworld}
          />
        )}

        {type === "vehicles" && (
          <VehiclesDetails
            key={uid}
            uid={uid}
            type={type}
            img={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`}
            name={store.details.properties?.name}
            model={store.details.properties?.model}
            vehicle_class={store.details.properties?.vehicle_class}
            manufacturer={store.details.properties?.manufacturer}
            cost_in_credits={store.details.properties?.cost_in_credits}
            length={store.details.properties?.length}
            crew={store.details.properties?.crew}
            passengers={store.details.properties?.passengers}
            max_atmosphering_speed={
              store.details.properties?.max_atmosphering_speed
            }
            cargo_capacity={store.details.properties?.cargo_capacity}
            consumables={store.details.properties?.consumables}
          />
        )}

        {type === "starships" && (
          <StarshipsDetails
            key={uid}
            uid={uid}
            type={type}
            img={`https://starwars-visualguide.com/assets/img/starships/${uid}.jpg`}
            name={store.details.properties?.name}
            model={store.details.properties?.model}
            starship_class={store.details.properties?.starship_class}
            manufacturer={store.details.properties?.manufacturer}
            cost_in_credits={store.details.properties?.cost_in_credits}
            length={store.details.properties?.length}
            crew={store.details.properties?.crew}
            passengers={store.details.properties?.passengers}
            max_atmosphering_speed={
              store.details.properties?.max_atmosphering_speed
            }
            cargo_capacity={store.details.properties?.cargo_capacity}
            consumables={store.details.properties?.consumables}
            hyperdrive_rating={store.details.properties?.hyperdrive_rating}
            MGLT={store.details.properties?.MGLT}
          />
        )}

        {type === "planets" && (
          <PlanetDetails
            key={uid}
            uid={uid}
            type={type}
            img={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
            diameter={store.details.properties?.diameter}
            rotation_period={store.details.properties?.rotation_period}
            orbital_period={store.details.properties?.orbital_period}
            gravity={store.details.properties?.gravity}
            population={store.details.properties?.population}
            climate={store.details.properties?.climate}
            terrain={store.details.properties?.terrain}
            surface_water={store.details.properties?.surface_water}
            name={store.details.properties?.name}
          />
        )}


      </div>
    </>
  );
};
