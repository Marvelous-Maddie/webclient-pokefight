import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

const PokemonInfos = () => {
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const { id } = useParams();
  const { info } = useParams();

  const fetchData = async () => {
    const res = await fetch(`https://immense-fortress-30260.herokuapp.com/pokemon/${id}/${info}`);
    res
      .json()
      .then(res => setPokemonInfo(res))
      .catch(alert);
  };

  useEffect(() => {
    fetchData();
  },[]);

  if(pokemonInfo) {
    return (
      <div>
        <h2>{info}</h2>
        <ul>
        {/*{Object.keys(pokemonInfo.{info}).map(k => <li>{k}:{pokemonInfo.{info}[k]}</li>)}*/}
        <li>Hello</li>
        </ul>
        <button><Link to={`/pokemon/${id}`}>Back</Link></button>
        <button><Link to="/">Back to the list</Link></button>
      </div>
    )
  };
}

export default PokemonInfos
