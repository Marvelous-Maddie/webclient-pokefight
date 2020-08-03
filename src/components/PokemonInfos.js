import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { Container, Typography, List, ListItemText, Button } from '@material-ui/core';

const PokemonInfos = () => {
  const [pokemonInfo, setPokemonInfo] = useState();
  const { id, info } = useParams();

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
      <Container>
          <Typography variant="h2">
            {info}
          </Typography>
        <List>
      {Object.keys(pokemonInfo).map(k => <ListItemText>{k}:{pokemonInfo[k]}</ListItemText>)}
        </List>
        <Button variant="contained" spacing="3"><Link to={`/pokemon/${id}`}>Back</Link></Button>
        <Button variant="contained" spacing="3"><Link to="/">Back to the list</Link></Button>
      </Container>
    )
  } else {
    return <h2>Loading...</h2>
  };
}

export default PokemonInfos
