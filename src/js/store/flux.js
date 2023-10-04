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
      /*// Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {

        fetch().then().then(data => setStore({ "foo": data.bar }))

      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },*/

      fetchPeople: () => {
        fetch("https://www.swapi.tech/api/people")
          .then(resp => resp.json())
          .then(data => setStore({ people: data.results }))
          .catch(err => console.log("No se encontro la informacion", err))
      },

      fetchPlanets: () => {
        fetch("https://www.swapi.tech/api/planets")
          .then(resp => resp.json())
          .then(data => setStore({ planets: data.results }))
          .catch(err => console.log("No se encontro la informacion", err))
      },

      fetchVehicles: () => {
        fetch("https://www.swapi.tech/api/vehicles")
          .then(resp => resp.json())
          .then(data => setStore({ vehicles: data.results }))
          .catch(err => console.log("No se encontro la informacion", err))
      },


    }
  };
};

export default getState;


