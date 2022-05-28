import Listagem from './Listagem';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import {Ingressos} from '../Ingressos';
import React,{ useEffect, useState } from 'react';
import {ListarCategoria, ListarEventos} from '../requisicoes'; 
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

    const [ingressos, setIngressos] = useState([]);

    useEffect(() => {
        setIngressos(Ingressos());
    },[])

  return (
    <Container>
      <ListContainer>
          {ingressos.map(ingresso => {
              return(
                
                <Listagem 
                key={ingresso.id}
                id={ingresso.id}
                name={ingresso.titulo}  
                price = {ingresso.price}
                />
             )
          })}
      </ListContainer>
    </Container>
  );
}
 
export default ContainerIngressos;