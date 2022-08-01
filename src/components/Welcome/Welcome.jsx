import React from "react";
import fondo from "./img/pokefondo.png";
import pikachu from "./img/pikachu.png";
import pika from "./img/pika.png";
import style from "./welcome.module.scss";

export const Welcome = () => {
  return (
    <div className={style.container}>
      <div className={style.box_one}>
        <h1>¡TE DAMOS LA BIENVENIDA AL CLUB DE ENTRENADORES POKÉMON!</h1>
        <img className={style.pikachu} src={pikachu} alt="" />
      </div>
      <div className={style.box_two}>
        <img className={style.fondo} src={fondo} alt="" />
      </div>

      <div className={style.box_three}>
        <img className={style.pika} src={pika} alt="" />
      </div>

    </div>
  );
};
