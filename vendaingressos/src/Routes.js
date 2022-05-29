import React from "react";
import { Navbar } from "react-bootstrap";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Main from "./components/Main";
import Produto from "./components/Produto";
import Categorias from "./components/Categorias/Categorias";
import Eventos from "./components/Eventos/Eventos";

const Rotas = () => {
   return(
       <BrowserRouter>
           <Routes>
            <Route exact path="/" element = {<Main/>} />
            <Route path="/ingresso/:id" element = { <Produto/> } />
            <Route path="/categorias" element = { <Categorias/> } />
            <Route path="/eventos" element = { <Eventos/> } />
           </Routes>
       </BrowserRouter>
   )
}

export default Rotas;