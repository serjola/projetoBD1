import React from 'react';  
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import img  from '../../fundoimg2.jpg';
import ContainerIngressos from '../ContainerIngressos';
import NavHeader from '../Navbar';
import { Navbar } from 'react-bootstrap';
import ListaEventos from './ListaEventos';

const StyledSection = styled.section`
height: 2000px;
width: 100%
background-size: 60% ;
background: linear-gradient(rgba(255,255,255,0), rgba(0,0,0,1) 50%),url(${img}) no-repeat;
`;

const Texto = styled.div`
    font-size: 4rem;
    margin-bottom: 5px;
    text-align: center;
    margin-bottom: 100px;
    padding-top: 100px;
    font-family: "Times New Roman", Times, serif;
    color: #fff;   
`;

function Eventos(){

    return(
        <StyledSection >   
            
            <NavHeader/>
            <Texto>Gerenciamento de Eventos</Texto>
            <ListaEventos/>
        </StyledSection>
    )
}
export default Eventos;