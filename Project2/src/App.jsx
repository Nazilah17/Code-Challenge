import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.deno.dev/pokemon?limit=50")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data);
      })
      .catch((error) => console.error("Error fetching Pokemon data:", error));
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchText.toLocaleLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        className="search-box w-full mb-4 p-2 border border-gray-300 rounded"
        placeholder="Search Pokemon..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className="flex flex-wrap justify-center">
        {filteredPokemons.map((pokemon) => (
          <div key={pokemon.name} className="card w-52 m-2 p-2 border border-gray-300 rounded shadow">
            <img src={pokemon.imageUrl} alt={pokemon.name} className="w-full rounded" />
            <h3 className="text-xl font-bold">{pokemon.name}</h3>
            <p>{pokemon.genus}</p>
            <p>{pokemon.description}</p>
            <p>Types: {pokemon.types.join(", ")}</p>
            <p>Abilities: {pokemon.abilities.map((ability) => ability.name).join(", ")}</p>
            <p>
              Stats: HP - {pokemon.stats.HP}, Attack - {pokemon.stats.Attack}, Defense - {pokemon.stats.Defense}
            </p>
            <p>Locations: {pokemon.locations.length > 0 ? pokemon.locations.join(", ") : "Unknown"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
