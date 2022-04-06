import React from "react";
import { Navbar } from "react-bootstrap";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Main from "./components/Main";
import Produto from "./components/Produto";

const Rotas = () => {
   return(
       <BrowserRouter>
           <Routes>
            <Route exact path="/" element = {<Main/>} />
            <Route path="/ingresso/:id" element = { <Produto/> } />
           </Routes>
       </BrowserRouter>
   )
}

export default Rotas;