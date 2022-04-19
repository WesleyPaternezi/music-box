import React from "react";
import logoVerde from "../html-css-template/imagens/logo-verde.png";
import avatar from "../html-css-template/imagens/avatar.png";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
      <nav>
        <div className="container">
          <Link to="/">
            <img src={logoVerde} alt="Logo" className="logo" />
          </Link>
          <img src={avatar} alt="Avatar" className="avatar" />
        </div>
      </nav>
    </>
  );
}

export default Menu;
