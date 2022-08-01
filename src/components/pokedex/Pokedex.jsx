import React, { useEffect, useState } from "react";
import { getPokemonData, getPokemons } from "../helpers/axios";
import { Results } from "./Results/Results";
import { Searchbar } from "./Searchbar/Searchbar";

export const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const axiosPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(25, 25 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 25));
    } catch (error) {}
  };

  useEffect(() => {
    axiosPokemons();
  }, [page]);

  return (
    <div>
   
      <Searchbar />
      
      <Results
        loading={loading}
        pokemons={pokemons}
        page={page}
        setPage={setPage}
        total={total}
      />
      </div>

  );
};
