import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://immense-fortress-30260.herokuapp.com/pokemon");
    res
      .json()
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
          return <li key={pokemon.id}><Link to={`/pokemon/${pokemon.id}`}>{pokemon.name.english}</Link></li>
        })}
      </ol>
    </div>
  )
};

export default Pokemon
