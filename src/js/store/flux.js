const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      /*demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white"
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white"
        }
      ],*/
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
    },


    actions: {
      

      fetchPeople: () => {
        fetch("https://www.swapi.tech/api/people?page=2&limit=82")
          .then(resp => resp.json())
          .then(data => setStore({ people: data.results }))
          .catch(err => console.log("No se encontro la informacion", err))
      },

      fetchPlanets: () => {
        fetch("https://www.swapi.tech/api/planets?page=2&limit=")
          .then(resp => resp.json())
          .then(data => setStore({ planets: data.results }))
          .catch(err => console.log("No se encontro la informacion", err))
      },

      fetchVehicles: () => {
        fetch("https://www.swapi.tech/api/vehicles?page=2&limit=")
          .then(resp => resp.json())
          .then(data => setStore({ vehicles: data.results }))
          .catch(err => console.log("No se encontro la informacion", err))
      },

      /*getFavorite: (data) => {
        const store = getStore();
        if (!store.favorites.includes(data)) {
          setStore({ favorites: [...store.favorites, data] })
        }
      },*/
      setFavorite: (data) => {
				const store = getStore();
				if(!store.favorites.includes(data)) {
					setStore({ favorites: [...store.favorites, data ]});
				}
			},
      
      deleteFavorite: (add) => {
        const store = getStore();
        const favorite = store.favorites.filter(favorite => favorite !== add);
        setStore({ favorites: favorite });


      }
    }
  };
};

export default getState;


