import Listagem from './Listagem';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import {Ingressos} from '../Ingressos';
import React,{ useEffect, useState } from 'react';

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #ccc;
  padding: 10px;
  width: 80rem;
  align-items: center;
`;

function ContainerIngressos() {

    const requisicoes = require('../Requisicoes');

    var json_obj = JSON.parse(requisicoes.ListarCategoria("http://localhost:4002/evento"));


    const [ingressos, setIngressos] = useState([]);

    useEffect(() => {
        setIngressos(Ingressos());
    },[])

  return (
    <Container>
      <ListContainer>
          {json_obj.map(ingresso => {
              return(
                
                <Listagem 
                key={ingresso.id}
                id={ingresso.id}
                name={ingresso.titulo}  
                descricao = {ingresso.descricao}
                />
             )
          })}
      </ListContainer>
    </Container>
  );
}
 
export default ContainerIngressos;