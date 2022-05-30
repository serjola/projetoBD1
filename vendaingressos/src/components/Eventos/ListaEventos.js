import ListagemEventos from './ListagemEventos';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import {Ingressos} from '../../Ingressos';
import React,{ useEffect, useState } from 'react';

import Listagem from '../Listagem';
import { Button, Modal } from 'react-bootstrap';
import ModalCriaEvento from '../uteis/ModalCriaEvento';

 
const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #ccc;
  padding: 10px;
  width: 95rem;
  align-items: center;
`;



function ListaEventos() {

  const requisicoes = require('../../Requisicoes');

  var json_obj = JSON.parse(requisicoes.Listar("http://localhost:4002/evento"));

  

  return (
      
    <Container>
      
      <ListContainer>
          <ModalCriaEvento/>
          
          {json_obj.map(evento => {
              var datas = evento.datas.map(data => {
                  data = data.split("T")
                  data = data[0]
                  data = data.replaceAll("-", "/")
                  data = data
                  return data + "\n"
              })
              
              return(
                    <ListagemEventos key={evento.id}  id={evento.id} name={evento.titulo} descricao={evento.descricao} datas={datas}/>
                    )})}
      </ListContainer>
    </Container>
  );
}
 
export default ListaEventos;