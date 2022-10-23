import './App.css';
import React, { useEffect, useState } from 'react';
import axios from "axios";


function App() {
  const [pokemon, setPokeApiData] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0") //pulled from pokeapi
      .then((response) => {
        console.log(response.data.results);
        setPokeApiData(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);  
  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {
          pokemon.map((pokemonObj, index)=>{
            return (<li key={index}>{pokemonObj.name}</li>)
          })
        }
      </ul>
    </div>
  );
}

export default App;
