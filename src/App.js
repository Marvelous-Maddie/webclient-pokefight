import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Container, Typography } from '@material-ui/core';
import Pokemon from "./components/Pokemon";
import PokemonId from "./components/PokemonId";
import PokemonInfos from "./components/PokemonInfos";
import 'fontsource-roboto';

function App() {
  return (
    <div className="App">
      <header>
        <Container>
          <Typography variant="h1">
            PokeFight
          </Typography>
        </Container>
      </header>

      <Switch>
      <Route exact path="/">
          <Pokemon />
        </Route>
        <Route exact path="/pokemon/:id">
          <PokemonId />
        </Route>
        <Route path="/pokemon/:id/:info">
          <PokemonInfos />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
