import Listagemcat from './Listagemcat';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import {Ingressos} from '../Ingressos';
import React,{ useEffect, useState } from 'react';
import {ListarCategoria, ListarEventos} from '../requisicoes';

import Listagem from './Listagem';
import { Button, Modal } from 'react-bootstrap';
import Modalz from './Modal';

 
const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #ccc;
  padding: 10px;
  width: 95rem;
  align-items: center;
`;

function Get(yourUrl){
  var Httpreq = new XMLHttpRequest(); // a new request
  Httpreq.open("GET",yourUrl,false);
  Httpreq.send(null);
  return Httpreq.responseText;          
}


function ListaCategorias() {

  var json_obj = JSON.parse(Get("http://localhost:4002/categoria"));
  console.log(json_obj)

  

  return (
      
    <Container>
      
      <ListContainer>
          <Modalz/>

          {json_obj.map(categoria => {
              return(
                    <Listagemcat key={categoria.id}  id={categoria.id} name={categoria.primeironome} sobrenome={categoria.sobrenome}/>
                    )})}
      </ListContainer>
    </Container>
  );
}
 
export default ListaCategorias;