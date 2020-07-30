import React from 'react';
import { Route } from "react-router-dom";
import Pokemon from "./components/Pokemon";
import PokemonId from "./components/PokemonId";
import PokemonInfos from "./components/PokemonInfos";
import './App.css';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
      <h1>PokeFight</h1>
      </header>*/}
      <main>
      <Route exact path="/">
        <Pokemon />
      </Route>
      <Route path="/pokemon/:id">
        <PokemonId />
      </Route>
      <Route path="/pokemon/:id/:info">
        <PokemonInfos />
      </Route>
      </main>
    </div>
  );
}

export default App;
