import React, { useState } from "react";
import style from "./navbar.module.scss";
import logo from './img/logo.png'

export const Navbar = () => {
  const [active, setActive] = useState(`${style.nav__menu}`);
  const [toggleIcon, setToggleIcon] = useState(`${style.nav__toggler}`);

  const navToggle = () => {
    active === `${style.nav__menu}`
      ? setActive(`${style.nav__active} ${style.nav__menu}`)
      : setActive(`${style.nav__menu}`);

    toggleIcon === `${style.nav__toggler}`
      ? setToggleIcon(`${style.toggle} ${style.nav__toggler} `)
      : setToggleIcon(`${style.nav__toggler}`);
  };

  return (
    <div>
      <nav className={style.nav}>
        <a  className={style.nav__brand}>
          <img src={logo} className={style.logo} alt="" />
        </a>
        <ul className={active}>
          <li className={style.nav__item}>
            <a  className={style.nav__link}>
              Home
            </a>
          </li>
          <li className={style.nav__item}>
            <a className={style.nav__link}>
              Pokedex
            </a>
          </li>
          <li className={style.nav__item}>
            <a className={style.nav__link}>
              Contact
            </a>
          </li>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
          <div className={style.line1}></div>
          <div className={style.line2}></div>
          <div className={style.line3}></div>
        </div>
      </nav>
    </div>
  );
};
