import React from "react";
import style from "./footer.module.scss";
import { FaMapMarkerAlt, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsPhone, BsEnvelope, BsInstagram, BsTwitter } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className={style.footer_distributed}>
      <div className={style.footer_left}>
        <h3>
          Jesus Ramos <br /><span> Frontend Developer</span>
        </h3>

        <p className={style.footer_links}>
          <a href="*">Home</a> | <a href="*">About</a> | <a href="*">Contact</a>{" "}
          | <a href="*">Blog</a> |
        </p>

        <p className={style.footer_company_name}>
          Copyright &copy; 2022 <strong>Jesus Frontend Developer</strong> Todos los
          derechos reservados
        </p>
      </div>

      <div className={style.footer_center}>
        <div>
          <FaMapMarkerAlt className={`${style.icon} ${style.marker}`} />
          <p>
            <span>Santiago</span>, Chile
          </p>
        </div>
        <div>
          <BsPhone className={`${style.icon} ${style.phone}`} />
          <p>+56 9 6274 4084</p>
        </div>
        <div>
          <BsEnvelope className={`${style.icon} ${style.envelope}`} />
          <p>
            <a href="*">jeenrade@gmail.com</a>
          </p>
        </div>
      </div>

      <div className={style.footer_right}>
        <p className={style.footer_company_about}>
          <span>About</span>
          <strong>Jesus Developer</strong> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          exercitationem nemo. Fugit expedita in ad!
        </p>
        <div className={style.footer_icons}>
          <a href="https://www.facebook.com/jesus.deffitt"target='_blank'>
            <FaFacebookF className={style.icon} />
          </a>
          <a href="https://www.instagram.com/jesusrd94/" target='_blank'>
            <BsInstagram className={style.icon} />
          </a>
          <a href="https://www.linkedin.com/in/jesus-ramos-deffitt/" target='_blank'>
            <FaLinkedinIn className={style.icon} />
          </a>
          <a href="https://twitter.com/jesusrd94" target='_blank'>
            <BsTwitter className={style.icon} />
          </a>
        </div>
      </div>
    </footer>
  );
};
