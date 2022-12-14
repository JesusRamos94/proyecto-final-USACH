import React from "react";
import { Pagination } from "../Pagination/Pagination";
import { Pokemon } from "../Pokemon/Pokemon";
import style from "./results.module.scss";
import logoDos from './img/logo.png'

export const Results = ({ pokemons, page, setPage, total, loading }) => {
  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total);
    setPage(nextPage);

    
  };
  return (
    <div>
      <div className={style.header}>
        <img className={style.logo} src={logoDos} alt="" />
        <Pagination
          page={page + 1}
          totalPages={total}
          onLeftClick={lastPage}
          onRightClick={nextPage}
        />
      </div>
      {loading ?
      <div className={style.loading}>Cargando Pokemones...</div> :
      <div className={style.pokedex_grid}>
        {pokemons.map((pokemon, i) => {
          return <Pokemon pokemon={pokemon} key={pokemon.name} />;
        })}
      </div>
}
    </div>
  );
};
