import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import img from '../logo.png';
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal } from 'react-bootstrap';

const ItemContainer = styled.div`
    border-radius: 4px;
    background-color: #fff;
    height: 100px;
    width: 1500px;
    color: #29303b;
    margin-bottom: 10px;
    margin-right: 10px;
    padding: 10px;
    flex-direction: row;
    display:inline-block;
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
    text-align: center;
    vertical-align: middle;
    width:30%;
    
    display:inline-block;
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
const Acoes = styled.div`
font-size: 1.5rem;  font-weight: bold;    
text-align: right;
width:40%;
align-items: right;
display:inline-block;
`



function Delete(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("DELETE",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
  }  

function Listagemcat(props){

    const handleSubmit = () => {
        var xhr = new XMLHttpRequest();
        xhr.open("DELETE", `http://localhost:4002/categoria/delete/${id}`, true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send();
    };

    var id = props.id;  
    return (
        
        <ItemLink >
            <ItemContainer>
                <TitlePane>{props.id}</TitlePane>
                <TitlePane>{props.name}</TitlePane>
                <Acoes>
                <a href={'https://localhost:3000'}><FontAwesomeIcon icon={faPenToSquare} /></a>
                <Button onClick={handleSubmit}><FontAwesomeIcon icon={faTrashCan}/></Button>
                </Acoes>
                <PricePane>{props.sobrenome}</PricePane>
                

                
            </ItemContainer>
        </ItemLink>
    )}
export default Listagemcat;
