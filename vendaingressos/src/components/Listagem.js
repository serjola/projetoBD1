import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import img from '../logo.png';

const ItemContainer = styled.div`
    border-radius: 4px;
    background-color: #fff;
    height: 600px;
    width: 300px;
    color: #29303b;
    margin-bottom: 10px;
    margin-right: 10px;
    padding: 10px;
    flex-direction: column;
    float: center;
    align-items: center;
    display: flex;
    justify-content: center;
`;
 
const Thumbnail = styled.img`
    height: 50%;
    border: 0;
    float: center;
    text-align: center;
    position: relative;
`;
 
const TitlePane = styled.div`
    font-size: 1.5rem;  font-weight: bold;      
    margin-bottom: 5px;
    text-align: center;
`;
 
const PricePane = styled.div`
    margin-bottom: 5px;
    text-align: center;
`;
 
const ItemLink = styled.div`
    text-decoration: none;
`;

const BotaoComprar = styled.button`
    background-color: #FF9933;
    border-radius: 4px;
    text-align: center; 
    align-items: center; 
    margin-left: 5%;
    display: flex;
    justify-content: center;
    margin-top: 5%;
    width: 90%;
    hover: #0066cc;
             
`;
const Detalhes = styled.div`
    font-size: 1rem;
`

function Listagem(props){
    return (
        <ItemLink href="https://www.luiztools.com.br/livro-nodejs-amazon" title="Clique para comprar">
            <ItemContainer>
                <Thumbnail src={img} />
                <TitlePane>{props.name}</TitlePane>
                <PricePane>{props.descricao}</PricePane>
                <hr/>
                <Link to={`/ingresso/${props.id}`}>
                    <BotaoComprar>Comprar</BotaoComprar>
                </Link>
            </ItemContainer>
        </ItemLink>
    )}
export default Listagem;

