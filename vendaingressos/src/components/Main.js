import React from 'react';  
import ReactDOM from 'react-dom';   
import '../style/main.css';       
import styled from 'styled-components'
import img  from '../fundoimg2.jpg';
import ContainerIngressos from './ContainerIngressos';

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

function Main(){

    return(
        <StyledSection >   
            <Texto>Garanta aqui o seu ingresso para os melhores shows</Texto>
            <ContainerIngressos/>
        </StyledSection>
    )
}
export default Main;