import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const PokemonId = (key) => {
  const [pokemon, setPokemon] = useState([]);

  const fetchData = async () => {
    const res = await fetch(`https://immense-fortress-30260.herokuapp.com/pokemon/${key}`);
    res
      .json()
      .then(res => setPokemon(res))
      .catch(alert);
  };

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div>
      <h2><Link to={`https://immense-fortress-30260.herokuapp.com/pokemon/name`}>{pokemon.name.english}</Link></h2>
      <ul>
        <li><Link to={`https://immense-fortress-30260.herokuapp.com/pokemon/type`}>{pokemon.type}</Link></li>
        <li><Link to={`https://immense-fortress-30260.herokuapp.com/pokemon/name`}>{pokemon.base}</Link></li>
      </ul>
    </div>
  )
};

export default PokemonId
