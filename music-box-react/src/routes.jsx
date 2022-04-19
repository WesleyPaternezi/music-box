import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //npm i react-router-dom

import Musicas from "./pages/Musicas";
import Adicionar from "./pages/Adicionar";

function Rotas() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Musicas />} />
        <Route path="/adicionar" exact element={<Adicionar />} />

      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;