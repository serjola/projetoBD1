import Listagem from './Listagem';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import {Ingressos} from '../Ingressos';
import { useEffect, useState } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
 
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
                name={ingresso.nome}  
                price = {ingresso.preco}
                descricao = {ingresso.descricao}
                />
             )
          })}
      </ListContainer>
    </Container>
  );
}
 
export default ContainerIngressos;