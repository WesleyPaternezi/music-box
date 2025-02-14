import React, { useEffect, useState } from "react";
import { useNavigate, userNavigate } from "react-router-dom";
import ItemMusica from "../components/ItemMusica";
import Menu from "../components/Menu";

import api from "../api";

function Musicas() {
  const navigate = useNavigate();
  const [musicas, setMusicas] = useState([]);

  useEffect(() => {
    api
      .get()
      .then((res) => {
        setMusicas(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Menu />

      <div className="container">
        <div className="filter">
          <button className="btn" onClick={() => navigate("/adicionar")}>Adicionar</button>
        </div>
      </div>

      <div className="container">
        <div className="music-boxes">
          {
          musicas.map((musica) => (
            <ItemMusica
              musica={musica.musica}
              artista={musica.artista}
              genero={musica.categoria}
              ano={musica.ano}
              imagem={musica.imagem}
              id={musica.id}
              key={musica.id}
            />
          ))}

          <ItemMusica
            musica="Ela Partiu"
            artista="Tim Maia"
            genero="Sofrência da boa"
            ano={1997}
            id="1"
          />
          <ItemMusica
            musica="Ela Partiu"
            artista="Tim Maia"
            genero="Sofrência da boa"
            ano={1997}
            id="1"
          />
        </div>
      </div>
    </>
  );
}

export default Musicas;
