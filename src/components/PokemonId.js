import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { Grid, Avatar, Typography, List, ListItemText, Button } from '@material-ui/core';

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
      <Grid container
        direction="row"
        justify="center"
        alignItems="baseline">
        <Typography variant="h2">
          Details
        </Typography>
        <Grid container item
          direction="column"
          justify="flex-start"
          alignItems="stretch">
          <Avatar alt="pic" src="" />
        </Grid>
        <Grid container item
          direction="column"
          justify="flex-start"
          alignItems="stretch">

        <Typography variant="h3">
          Name
        </Typography>
        <List>
          {Object.keys(pokemon.name).map(k => <ListItemText>{k}:{pokemon.name[k]}</ListItemText>)}
        </List>
        <Typography variant="h3">
          Type
        </Typography>
        <List>
          {Object.keys(pokemon.type).map(k => <ListItemText>{k}:{pokemon.type[k]}</ListItemText>)}
        </List>
        <Typography variant="h3">
          Base
        </Typography>
        <List>
          {Object.keys(pokemon.base).map(k => <ListItemText>{k}:{pokemon.base[k]}</ListItemText>)}
        </List>
        </Grid>
        <Button variant="contained">Select Pokemon</Button>
        <Button variant="contained"><Link to="/">Back to the list</Link></Button>
      </Grid>
    )
  } else {
      return(<h2>Loading...</h2>)
  }
};

export default PokemonId
