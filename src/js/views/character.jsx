import React, { useContext } from "react";
import "../../styles/character.css";
import { SmChar } from "../component/smCharacterCard.jsx";
import { Context } from "../store/appContext";

export const Character = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid bg-dark">
    Esto es character
    <div className="horizontal-scrollable">
      <div className="row flex-nowrap">
        {store.people?.map((el) => (
         
            <SmChar
              key={el.uid}
              img={`https://starwars-visualguide.com/assets/img/characters/${el.uid}.jpg`}
              name={el.name}
            />
        
        ))}
      </div>
    </div>
  </div>
  );
};
