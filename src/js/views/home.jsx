import React, { useContext, useEffect } from "react";
import bgTop from "../../img/bg-top.jpg";
import bgPlanet from "../../img/bg-planet.png";
import bgBottom from "../../img/bg-bottom.png";
import "../../styles/home.css";
import { SmChar } from "../component/smallCard.jsx";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar.jsx";

export const Home = () => {
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

  return (
    <>
 <Navbar />
      <section className="myBg" style={{ backgroundImage: `url(${bgTop})` }}>
        <div className="horizontal-scrollable">
          <div className="row flex-nowrap mt-5 pt-5">
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
      </section>

      <section className="myBg" style={{ backgroundImage: `url(${bgPlanet})` }}>
        <div className="horizontal-scrollable">
          <div className="row flex-nowrap">
            <div className="col-1 col-md-4 col-lg-3  m-3"></div>
            {store.planets?.map((planet) => (
              <SmChar
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
      
      <section className="myBg" style={{ backgroundImage: `url(${bgBottom})` }}>
        <div className="vehicles horizontal-scrollable mb-5">
          <div className="row flex-nowrap">
            <div className="col-1 col-md-4 col-lg-3  m-3"></div>
            {store.vehicles?.map((vehicles) => (
              <SmChar
                key={vehicles.uid}
                img={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.uid}.jpg`}
                name={vehicles.name}
                type={"vehicles"}
                uid={vehicles.uid}/>
            ))}
          </div>
        </div>
        <div className="horizontal-scrollable my-5">
          <div className="row flex-nowrap">
            <div className="col-1 col-md-4 col-lg-3 m-3"></div>
            {store.starships
              ?.filter((starship) => {
                const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`;
                return starship.uid && starship.name && isValidImage(imageUrl);
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
      </section>
    </>
  );
};
