const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      url: "https://www.swapi.tech/api",
      people:[],
			vehicles:[],
			starships:[],
		  planets:[]
    },
    actions: {
      loadInfo: async (type) => {
        try {
          const resp = await fetch(getStore().url + `/${type}`);
          if (!resp.ok) throw new Error("Error loading data");
          const data = await resp.json();
          console.log(data);
          setStore({ [type]: data.results });
        } catch (error) {
          console.error(error);
        }
      },

      getSingle: async (type,uid) => {
        try {
          const resp = await fetch(getStore().url + `/${type}/${uid}`);
          if (!resp.ok) throw new Error("Error loading data");
          const data = await resp.json();
          console.log(data);
          setStore({ details: data.result });
        } catch (error) {
          console.error(error);
        }
      },

      getPlanet: async (url) => {
        try {
          const resp = await fetch(url);
          if (!resp.ok) throw new Error("Error loading planet");
          const data = await resp.json();
          console.log(data);
         return(data.result.properties.name ) 
        } catch (error) {
          console.error(error);
        }
      },

      getVehiStar: async (type, uid) => {
        try {
          const resp = await fetch(getStore().url + `/${type}/${uid}`);
          if (!resp.ok) throw new Error("Error loading vehicle/starships");
          const data = await resp.json();
          console.log(data);
          const pilotsArray = data.result.properties.pilots
         return pilotsArray 
        } catch (error) {
          console.error(error);
        }
      },

      getCharVehiStarships: async (characterUrl) => {
        const store = getStore();
      
        const vehiclesPromises = store.vehicles.map(async (vehicle) => {
          const pilots = await getActions().getVehiStar("vehicles", vehicle.uid);

          if (pilots && pilots.includes(characterUrl)) {
            return vehicle.name; 
          }
          return null; 
        });
      
       
        const starshipsPromises = store.starships.map(async (starship) => {
          const pilots = await getActions().getVehiStar("starships", starship.uid);
          if (pilots && pilots.includes(characterUrl)) {
            return starship.name; 
          }
          return null;
        });
      
        
        const vehiclesResults = await Promise.all(vehiclesPromises);
        const starshipsResults = await Promise.all(starshipsPromises);
      
    
        const charVehicles = vehiclesResults.filter((name) => name !== null);
        const charStarships = starshipsResults.filter((name) => name !== null);
      
        return {
          vehicles: charVehicles.length ? charVehicles : ["No vehicles"],
          starships: charStarships.length ? charStarships : ["No starships"],
        };
      },


      clearSingle: () => setStore({ details: {} })
    },
  };
};

export default getState;
