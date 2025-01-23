const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      url: "https://www.swapi.tech/api",
      people:[],
			vehicles:[],
			starships:[],
		  planets:[],
      species:[],
      favorites:[]
    },
    actions: {
      loadInfo: async (type) => {
        try {
            let url = getStore().url + `/${type}`;
            let results = [];
            const limit = 10; 
    
            while (url && results.length < limit) {
                const resp = await fetch(url);
                if (!resp.ok) throw new Error("Error loading data");
    
                const data = await resp.json();
                results = results.concat(data.results);
  
                if (results.length > limit) {
                    results = results.slice(0, limit); 
                }
    
                url = data.next; 
            }
            const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

    
            setStore({ [type]: shuffleArray(results) });
        } catch (error) {
            console.error(error);
        }
    },

      getSingle: async (type,uid) => {
        try {
          const resp = await fetch(getStore().url + `/${type}/${uid}`);
          if (!resp.ok) throw new Error("Error loading data");
          const data = await resp.json();
          setStore({ details: data.result });
        } catch (error) {
          console.error(error);
        }
      },

      getPlanet: async (url) => {
        const store = getStore();
        const cachedPlanet = store.planets.find((p) => p.url === url);
        if (cachedPlanet) return cachedPlanet.name;
      
        try {
          const resp = await fetch(url);
          if (!resp.ok) throw new Error("Error loading planet");
          const data = await resp.json();
          const newPlanet = { name: data.result.properties.name, url };
          setStore({ planets: [...store.planets, newPlanet] });
          return newPlanet.name;
        } catch (error) {
          console.error(error);
          return "Unknown";
        }
      },

      getVehiStar: async (type, uid) => {
        try {
          const resp = await fetch(getStore().url + `/${type}/${uid}`);
          if (!resp.ok) throw new Error("Error loading vehicle/starships");
          const data = await resp.json();
          const pilotsArray = data.result.properties.pilots
         return pilotsArray 
        } catch (error) {
          console.error(error);
        }
      },

      getSpecie: async (type, uid) => {
        try {
          const resp = await fetch(getStore().url + `/${type}/${uid}`);
          if (!resp.ok) throw new Error("Error loading vehicle/starships");
          const data = await resp.json();
          const speciesArray = data.result.properties.people
         return speciesArray 
        } catch (error) {
          console.error(error);
        }
      },

      getCharPlusInfo: async (characterUrl) => {
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
      
        const speciesPromises = store.species.map(async (specie) => {
          const people = await getActions().getSpecie("species", specie.uid);
          if (people && people.includes(characterUrl)) {
            return specie.name; 
          }
          return null;
        });
        
        const vehiclesResults = await Promise.all(vehiclesPromises);
        const starshipsResults = await Promise.all(starshipsPromises);
        const speciesResults = await Promise.all(speciesPromises);
      
    
        const charVehicles = vehiclesResults.filter((name) => name !== null);
        const charStarships = starshipsResults.filter((name) => name !== null);
        const charSpecie = speciesResults.filter((name) => name !== null);
      
        return {
          vehicles: charVehicles.length ? charVehicles : ["No vehicles"],
          starships: charStarships.length ? charStarships : ["No starships"],
          species: charSpecie.length ? charSpecie : ["Human"]
        };
      },


      clearSingle: () => setStore({ details: {} }),

      toggleFav: (fav) => {
        const store = getStore();
     
        const isFavorite = store.favorites.some(
          (el) => (el.uid === fav.uid && el.type === fav.type) 
        );
      
        if (isFavorite) {
        
          setStore({
            favorites: store.favorites.filter(
              (el) => !((el.uid === fav.uid && el.type === fav.type))
            ),
          });
        } else {
          
          setStore({
            favorites: [
              ...store.favorites,
              { name: fav.name, uid: fav.uid, type: fav.type }, 
            ],
          });
        }
      
        console.log(getStore().favorites); 
      },
    },
  };
};

export default getState;
