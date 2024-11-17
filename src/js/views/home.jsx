import React, { useContext, useEffect } from "react";
import bgTop from "../../img/bg-top.jpg";
import bgBottom from "../../img/bg-bottom.png";
import "../../styles/home.css";
import { SmChar } from "../component/smCard.jsx";
import { Context } from "../store/appContext";


export const Home = () => {
	const { store, actions } = useContext(Context)
	useEffect(()=>{
		actions.clearSingle()
	},[])
  
	return (
		<>
	  <section className="myCharacters" style={{backgroundImage: `url(${bgTop})`}} >
	  <div className="horizontal-scrollable">
		<div className="row flex-nowrap">
			<div className="col-1 col-md-4 col-lg-3  m-3"></div>
		  {store.people?.map((person) => (
			  <SmChar
				key={person.uid}
				img={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
				name={person.name}
				type={'people'}
				uid={person.uid}
			  />
		  
		  ))}
		</div>
	  </div>
	  </section>
	  <div className="horizontal-scrollable" style={{backgroundImage: `url(${bgBottom})`}} >
	  <div className="row flex-nowrap">
			<div className="col-1 col-md-4 col-lg-3  m-3"></div>
		  {store.vehicles?.map((vehicles) => (
			  <SmChar
				key={vehicles.uid}
				img={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.uid}.jpg`}
				name={vehicles.name}
				type={'vehicles'}
				uid={vehicles.uid}
			  />
		  
		  ))}
		</div></div>
	
	</>
	);
  };