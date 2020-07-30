import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

const PokemonId = () => {
  const [pokemon, setPokemon] = useState(null);
  const { id } = useParams();

  const fetchData = async () => {
    const res = await fetch(`https://immense-fortress-30260.herokuapp.com/pokemon/${id}`);
    res
      .json()
      .then(res => setPokemon(res))
      .catch(alert);
  };

  useEffect(() => {
    fetchData();
  },[]);

  if(pokemon) {
    return (
      <div>
        <h2><Link to={`/pokemon/${id}/name`}>Name</Link></h2>
        <ul>
          {Object.keys(pokemon.name).map(k => <li>{k}:{pokemon.name[k]}</li>)}
        </ul>
        <h2><Link to={`/pokemon/${id}/type`}>Type</Link></h2>
        <ul>
          {Object.keys(pokemon.type).map(k => <li>{k}:{pokemon.type[k]}</li>)}
        </ul>
        <h2><Link to={`/pokemon/${id}/base`}>Base</Link></h2>
        <ul>
          {Object.keys(pokemon.base).map(k => <li>{k}:{pokemon.base[k]}</li>)}
        </ul>
      </div>
    )
  } else {
      return(<h2>Loading...</h2>)
  }
};

export default PokemonId
