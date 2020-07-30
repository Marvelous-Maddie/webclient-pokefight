import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

const PokemonInfos = () => {
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const { id } = useParams();
  const { info } = useParams();

  const fetchData = async () => {
    const res = await fetch("https://immense-fortress-30260.herokuapp.com/pokemon/${id}/${info}");
    res
      .json()
      .then(res => console.log(res))
      .then(res => setPokemonInfo(res))
      .catch(alert);
  };

  useEffect(() => {
    fetchData();
  },[]);

  if(pokemonInfo) {
    return (
      <div>
        <h2>${info}</h2>
        <ul>
          {Object.keys(pokemon.${info}).map(k => <li>{k}:{pokemon.${info}[k]}</li>)}
        </ul>
      </div>
  )
};

export default PokemonInfos
