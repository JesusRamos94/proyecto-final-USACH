import React from "react";
import style from "./pokemon.module.scss";

export const Pokemon = ({ pokemon }) => {
  return (
    <div className={style.pokemon_card}>
      <div className={style.pokemon_img_container}>
        <img
          src={pokemon.sprites.other.home.front_default}
          alt={pokemon.name}
          className={style.pokemon_img}
        />
      </div>
      <div className={style.card_body}>
        <div className={style.card_top}>
          <h3>{pokemon.name} <span className={style.base_stat}>{pokemon.stats[0].base_stat} hp</span></h3>
          <div>#{pokemon.id}</div>
        </div>

        <div className={style.card_botton}>
          <div className={style.pokemon_type}>
            {pokemon.types.map((type, i) => {
              return (
                <div className={style.pokemon_type_text} key={i}>
                <span className={style.prueba}>  {type.type.name} </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

