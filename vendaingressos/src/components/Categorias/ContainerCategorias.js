import Listagemcat from './Listagemcat';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import {Ingressos} from '../../Ingressos';
import React,{ useEffect, useState } from 'react';
import {ListarCategoria} from '../../Requisicoes';

import Listagem from '../Listagem';
import { Button, Modal } from 'react-bootstrap';
import Modalz from '../uteis/ModalCriaCategoria';

 
const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #ccc;
  padding: 10px;
  width: 95rem;
  align-items: center;
`;



function ListaCategorias() {

  const requisicoes = require('../../Requisicoes');

  var json_obj = JSON.parse(requisicoes.Listar("http://localhost:4002/categoria"));

  

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