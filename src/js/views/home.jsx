import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Context } from "../store/appContext";

import { cloudinaryURLs } from "../../config/cloudinary";



import "../../styles/home.css";
import { SmChar } from "../component/smallCard.jsx";
import { PlanetChar } from "../component/smallCardPlanet.jsx";




export const Home = () => { 
  const [selected, setSelected] = useState("vehicles");

  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.clearSingle();
  }, []);

  const isValidImage = (url) => {
    try {
      const img = new Image();
      img.src = url;
      return img.complete && img.naturalWidth !== 0;
    } catch (error) {
      console.error("Invalid image URL:", url);
      return false;
    }
  };

  const toggleSelected = (id) => {
    setSelected(id);
  };

  return (
    <>
      <section className="my-bg" style={{ backgroundImage: `url(${cloudinaryURLs.bgTop})` }}>
        <div className="horizontal-scrollable">
          <div className="row flex-nowrap mx-4 pt-5">
            <div className="col-1 col-md-4 col-lg-3  m-3"></div>
            {store.people?.map((person) => (
              <SmChar
                key={person.uid}
                img={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
                name={person.name}
                type={"people"}
                uid={person.uid}
              />
            ))}
          </div>
        </div>
        <div className="horizontal-scrollable mt-5">
          <div className="row flex-nowrap mt-5">
            <div className="col-1 col-md-4 col-lg-3  m-4 me-4 "></div>
            {store.planets
              ?.filter((planet) => {
                const imageUrl = `https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`;
                return planet.uid && planet.name && isValidImage(imageUrl);
              })
              .map((planet) => (
                <PlanetChar
                  key={planet.uid}
                  img={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                  name={planet.name}
                  type={"planets"}
                  uid={planet.uid}
                />
              ))}
          </div>
        </div>
      </section>

      <section
        className="my-bg-bottom pb-0"
        style={{ backgroundImage: `url(${cloudinaryURLs.bgBottom})` }}
      >
       
<img src={cloudinaryURLs.Timeline1} alt="timeline" className="timeline img-fluid mb-2 small-d-none"/>

<img src={cloudinaryURLs.Timeline2} alt="timeline" className="timeline img-fluid mt-2 small-d-none"/>
     
        

        <div className="d-flex ps-5 mt-5">
          <img
            style={{ cursor: `url(${cloudinaryURLs.pointer}) 16 16, auto` }}
            src={cloudinaryURLs.vehicle}
            alt="vehicles"
            className={`home-icons ${
              selected === "vehicles" ? "selected" : "unselected"
            }`}
            id="vehicles"
            onClick={() => toggleSelected("vehicles")}
          />
          <img
            style={{ cursor: `url(${cloudinaryURLs.pointer}) 16 16, auto` }}
            src={cloudinaryURLs.starship}
            alt="starships"
            className={`home-icons ${
              selected === "starships" ? "selected" : "unselected"
            }`}
            id="starships"
            onClick={() => toggleSelected("starships")}
          />
        </div>

        <div className="glass-vehic-stars">
          <div
            className={`horizontal-scrollable my-5 ${
              selected === "vehicles" ? "d-block" : "d-none"
            }`}
          >
            <div className="row flex-nowrap">
              <div className="col-1 col-md-4 col-lg-3  m-3"></div>
              {store.vehicles?.map((vehicles) => (
                <SmChar
                  key={vehicles.uid}
                  img={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.uid}.jpg`}
                  name={vehicles.name}
                  type={"vehicles"}
                  uid={vehicles.uid}
                />
              ))}
            </div>
          </div>
          <div
            className={`horizontal-scrollable my-5 ${
              selected === "starships" ? "d-block" : "d-none"
            }`}
          >
            <div className="row flex-nowrap">
              <div className="col-1 col-md-4 col-lg-3 m-3"></div>
              {store.starships
                ?.filter((starship) => {
                  const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`;
                  return (
                    starship.uid && starship.name && isValidImage(imageUrl)
                  );
                })
                .map((starship) => (
                  <SmChar
                    key={starship.uid}
                    img={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`}
                    name={starship.name}
                    type={"starships"}
                    uid={starship.uid}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
