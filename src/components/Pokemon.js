import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Container, Typography, Card, CardContent, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';

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
    <Container>
      <Typography variant="h2">
        Next Fight
      </Typography>
      <Card variant="outlined">
        <CardContent>
        Pokemon 1 : Pokemon 2
        </CardContent>
      </Card>
      <Typography variant="h2">
        Pokemons
      </Typography>
      <Card variant="outlined">
        <CardContent>
          <List>
          {pokemons.map(pokemon => {
            return (
              <ListItem key={pokemon.id}>
                <ListItemAvatar>
                  <Avatar>

                  </Avatar>
                </ListItemAvatar>
                <ListItemText>
                  <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name.english}</Link>
                </ListItemText>
              </ListItem>
            )
          })}
        </List>
        </CardContent>
        </Card>
    </Container>
  )
};

export default Pokemon
