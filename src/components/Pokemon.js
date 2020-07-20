import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/pokemon");
    res
      .json()
      .then(res => console.log(res))
      .then(res => setPokemons(res))
      .catch(alert);
  };

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div>
      <h2>Pokemons</h2>
      <ol>
        {pokemons.map(pokemon => {
          return <li key={pokemon.id}><Link to={`${pokemon.id}`}>{pokemon.name.english}</Link></li>
        })}
      </ol>
    </div>
  )
};

export default Pokemon
