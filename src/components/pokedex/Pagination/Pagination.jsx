import React from "react";
import style from "./pagination.module.scss";
import {  AiOutlineArrowRight,AiOutlineArrowLeft} from "react-icons/ai";

export const Pagination = ({ onLeftClick, onRightClick, page, totalPages }) => {
  return (
    <div className={style.pagination}>
      <button onClick={onLeftClick}><AiOutlineArrowLeft className={style.icon}/></button>
      <div>
        {page} de {totalPages}
      </div>
      <button onClick={onRightClick}><AiOutlineArrowRight className={style.icon}/></button>
    </div>
  );
};

