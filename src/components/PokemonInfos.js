import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const PokemonInfos = () => {
  const [pokemonInfo, setPokemonInfo] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://immense-fortress-30260.herokuapp.com/pokemon/:id/:info");
    res
      .json()
      .then(res => console.log(res))
      .then(res => setPokemonInfo(res))
      .catch(alert);
  };

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div>
      <h2>{}</h2>
      <ul>
        <li></li>
      </ul>
    </div>
  )
};


export default PokemonInfos
