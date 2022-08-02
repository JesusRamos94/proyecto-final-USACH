import React, { useState } from "react";
import { searchPokemon } from "../../helpers/axios";
import style from "./searchbar.module.scss";
import { FiSearch } from "react-icons/fi";

export const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState("");

  const onChange = (event) => {
    setSearch(event.target.value);
    if (event.target.value.length === 0) {
      return;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await searchPokemon(search);

    setPokemon(data);
    setSearch("");
    if (pokemon === undefined) {
      return;
    }
  };

  return (
    <div className={style.searchbar_container}>
      <form onSubmit={handleSubmit}>
        <div className={style.searchbar}>
          {" "}
          <input
            type="text"
            placeholder="Buscar pokemon..."
            onChange={onChange}
            value={search}
          />
          <div className={style.searchbar_btn}>
            <button><FiSearch/></button>
          </div>
        </div>
      </form>

      <div>
        {pokemon ? (
          <div className={style.container}>
            <div className={style.box_one}>
              <img
                className={style.img}
                src={pokemon.sprites.other.home.front_default}
                alt=""
              />
            </div>
            <div className={style.box_two}>
              <h2>{pokemon.name}</h2>
              <div className={style.box}>
                <h4>tipo:</h4>
                <p>
                  {" "}
                  {pokemon.types.map((type, i) => {
                    return (
                      <div className={style.pokemon_type_text} key={i}>
                        <span className={style.prueba}> {type.type.name} </span>
                      </div>
                    );
                  })}
                </p>
              </div>
              <div className={style.box}>
                <h4>habilidades:</h4>
                <p>
                  {" "}
                  {pokemon.abilities.map((type, i) => {
                    return (
                      <div className={style.pokemon_type_text} key={i}>
                        <span className={style.prueba}>
                          {" "}
                          {type.ability.name}{" "}
                        </span>
                      </div>
                    );
                  })}
                </p>
              </div>

              <h4>Peso:</h4>
              <p>{pokemon.weight}Kg</p>
              

              <div className={style.img_container}>
                <div className={style.box}>
                  <img
                    className={style.img_one}
                    src={pokemon.sprites.other.dream_world.front_default}
                    alt=""
                  />{" "}
                  Versión: Mundo de los sueños
                </div>
                <div className={style.box}>
                  <img
                    className={style.img_two}
                    src={pokemon.sprites.front_default}
                    alt=""
                  />
                  Versión: Videojuegos antiguos
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
