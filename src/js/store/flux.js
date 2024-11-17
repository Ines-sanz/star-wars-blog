const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      url: "https://www.swapi.tech/api",
      people: [],
    },
    actions: {
      loadCharacters: async () => {
        try {
          const resp = await fetch(getStore().url + "/people");
          if (!resp.ok) throw new Error("Error loading data");
          const data = await resp.json();
          console.log(data);
          setStore({ people: data.results });
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
    },
  };
};

export default getState;
