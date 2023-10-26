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
      
//People
      fetchPeople: () => {
        fetch("https://www.swapi.tech/api/people?page=2&limit=82")
          .then(resp => resp.json())
          .then(data => setStore({ people: data.results }))
          .catch(err => console.log("No se encontro la informacion", err))
      },
//Planet
      fetchPlanets: () => {
        fetch("https://www.swapi.tech/api/planets?page=2&limit=")
          .then(resp => resp.json())
          .then(data => setStore({planets: data.results}))
          .catch(err => console.log("No se encontro la informacion", err))
      },
//Vehicle
      fetchVehicles: () => {
        fetch("https://www.swapi.tech/api/vehicles?page=2&limit=")
          .then(resp => resp.json())
          .then(data => setStore({ vehicles: data.results }))
          .catch(err => console.log("No se encontro la informacion", err))
      },
//Funcion favorito, guarda la info del componenete que se seleccione 
      getFavorite: (data) => {
        const store = getStore();
        if (!store.favorites.includes(data)) {
          setStore({ favorites: [...store.favorites, data] })
        }
      },
// Funcion eliminar, elimina el componente favorito que se seleccione      
      deleteFavorite: (data) => {
        const store = getStore();
        const favorite = store.favorites.filter(favorite => favorite !== data);
        setStore({ favorites: favorite });
      }
    }
  };
};

export default getState;


