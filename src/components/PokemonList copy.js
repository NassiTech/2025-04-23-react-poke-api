import React, { useEffect, useState } from "react";

import PokemonCard from "./PokemonCard";
import "./PokemonList.css";
import Navbar from "./Navbar";

function PokemonList() {
  //const urlListe = [];
  // const pokemonListe = [];
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
      .then((res) => res.json())
      .then((data) => {
        const fetches = data.results.map((element) =>
          fetch(element.url).then((res) => res.json())
        );
        return Promise.all(fetches); // Wait for all to finish
      })
      .then((pokemonDataArray) => {
        setPokemons(pokemonDataArray); // Set once
      });
  }, []);

  return (
    <>
      <Navbar></Navbar>

      <div className="containerList">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            image={pokemon.sprites.front_default}
            Name={pokemon.name}
            Gewicht={pokemon.weight}
            Größe={pokemon.height}
            Typ={pokemon.types[0].type.name}
          ></PokemonCard>
        ))}
      </div>

      {pokemons.slice(20).map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          image={pokemon.sprites.front_default}
          Name={pokemon.name}
          Gewicht={pokemon.weight}
          Größe={pokemon.height}
          Typ={pokemon.types[0].type.name}
        ></PokemonCard>
      ))}
      <button onClick={() => setPokemons(PokemonCard + 1)}>Show more</button>
    </>
  );
}

export default PokemonList;
