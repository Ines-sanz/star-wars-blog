import React, { useContext } from "react";
import bgTop from "../../img/bg-top.jpg";
import "../../styles/home.css";
import { SmChar } from "../component/smCard.jsx";
import { Context } from "../store/appContext";


export const Home = () => {
	const { store, actions } = useContext(Context)
  
	return (
	  <section className="myCharacters" style={{backgroundImage: `url(${bgTop})`}} >
	  <div className="horizontal-scrollable">
		<div className="row flex-nowrap">
			<div className="col-1 col-md-4 col-lg-3  m-3"></div>
		  {store.people?.map((el) => (
			  <SmChar
				key={el.uid}
				img={`https://starwars-visualguide.com/assets/img/characters/${el.uid}.jpg`}
				name={el.name}
			  />
		  
		  ))}
		</div>
	  </div>
	</section>
	);
  };