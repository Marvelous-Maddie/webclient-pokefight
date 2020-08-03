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
          <Link to={`/pokemon/${pokemon.id}/name`}>name</Link>
        </Typography>
        <List>
          {Object.keys(pokemon.name).map(k => <ListItemText>{k}:{pokemon.name[k]}</ListItemText>)}
        </List>
        <Typography variant="h3">
          <Link to={`/pokemon/${pokemon.id}/type`}>type</Link>
        </Typography>
        <List>
          {Object.keys(pokemon.type).map(k => <ListItemText>{k}:{pokemon.type[k]}</ListItemText>)}
        </List>
        <Typography variant="h3">
          <Link to={`/pokemon/${pokemon.id}/base`}>base</Link>
        </Typography>
        <List>
          {Object.keys(pokemon.base).map(k => <ListItemText>{k}:{pokemon.base[k]}</ListItemText>)}
        </List>
        </Grid>
        <Button variant="contained" spacing="3">Select Pokemon</Button>
        <Button variant="contained" spacing="3"><Link to="/">Back to the list</Link></Button>
      </Grid>
    )
  } else {
      return(<h2>Loading...</h2>)
  }
};

export default PokemonId
