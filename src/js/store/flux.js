const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      url: "https://www.swapi.tech/api",
      people: [],
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

      clearSingle: ()=>setStore({single: {}})
    },
  };
};

export default getState;
