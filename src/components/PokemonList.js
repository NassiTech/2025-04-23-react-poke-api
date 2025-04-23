import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import "./PokemonList.css";
import Navbar from "./Navbar";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false); // Track fetch status

  // Function to fetch a Pokemon and add it to the list
  const fetchPokemon = async (id) => {
    if (loading) return; // Prevent new fetches while loading
    setLoading(true); // Set loading to true
    console.log("Hello from FP", count);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const pokemonData = await response.json();
      setPokemons((prevPokemons) => [...prevPokemons, pokemonData]); // Add new Pokémon
      setCount((prevCount) => prevCount + 1); // Increment the count after fetching
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
    } finally {
      setLoading(false); // Set loading to false after fetch
    }
  };

  // Fetch the first Pokemon on initial render
  useEffect(() => {
    console.log("Hello from UE", count);
    if (pokemons.length === 0) {
      fetchPokemon(count);
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      <Navbar></Navbar>

      <div>
        <button
          onClick={() => fetchPokemon(count)} // Fetch the next Pokemon when button is clicked
          style={{ color: "blue", height: "50px", margin: "20px 0 0 20px" }}
        >
          Show Next PokemonCard
        </button>
      </div>

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
    </>
  );
}

export default PokemonList;
