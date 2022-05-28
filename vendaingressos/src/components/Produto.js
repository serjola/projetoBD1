// Functional component
import React from 'react';
import $ from 'jquery';
import { useParams } from 'react-router-dom';
import jquery from 'jquery';
import NavHeader from './Navbar';
import { Ingressos } from '../Ingressos';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import img from '../logo.png';

const handleClick = () => {
    $.ajax({
        url: 'http://localhost:4002/',
        type: 'GET',
        contentType: "application/json",
        success: function (result) {
            console.log(result);
          },
          error: function (result, status) {
            console.log(result);
          }
    })
  }

const Thumbnail = styled.img`
    height: 100%;
    border: 0;
    float: left;
    text-align: left;
    position: relative;
`;

const Divdescricao = styled.div`
    font-size: 20px;
    margin-top:50px;
    margin-bottom:50px;
    color: orange`

const Divpreco = styled.div`
    font-size: 2rem;  font-weight: bold;
    margin-top:70%;
    margin-bottom:60%;
    color:orange;
    border-radius: 4px;
    border: 10px;
    border-color: #FFFFFF; `

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  width: 90%;
  height: 600px;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
  margin-top: 40px;
  border-radius: 4px;
  background-color: black;
`;

const StyledSection = styled.section`
height: 870px;
width: 100%
background-size: 60% ;
background:black
`;

const BotaoComprar = styled.button`
    background-color: #FF9933;
    border-radius: 4px;
    text-align: center; 
    align-items: center; 
    margin-right: 20px;
    display: flex;
    justify-content: center;
    margin-bottom: 5%;
    width: 100%;
    height: 50px;
    hover: #0066cc;
    border-radius: 4px;
    border: 10px;
    border-color: #FF9933;  
             
`;


const TituloProduto = styled.div`
    font-size: 1.5rem;  font-weight: bold;
    color: orange`
const LocalData = styled.div`

    font-size: 1.5rem;  font-weight: bold;
    color: orange`

const Separador = styled.hr`
    border-top:2px solid ; 
    color: orange`

const Produto = () => {
    var produto
    const { id } = useParams();
    const arquivo = Ingressos()
    console.log(arquivo)
    console.log(id)
    arquivo.map(item => {
        if(item.id == id){
            produto = item
        }
    })
    return (
        
        <StyledSection>
            <NavHeader/>
        <ListContainer>
        <Container fluid >
            <Row>
                <Col md={12}>
                <TituloProduto>{produto.nome}</TituloProduto>
                <Separador/>
                </Col>
            </Row>
         <Row  >
            <Col md={2}>

            <Thumbnail src={img} />
            
            </Col>

            <Col sm={8}>
                <Row>
                    <Col md={{span:9, offset:1}}>
                            <Divdescricao> {produto.descricao}</Divdescricao>
                        
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                    <LocalData>
                    Local: {produto.local} <br/>
                    Data: {produto.data}
                    </LocalData>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                     aaaaaa
                    </Col>
                    <Col sm={12}>
                    </Col>
                </Row>
                
            </Col>
            <Col sm={2} >
        

                <Divpreco> {"R$"+(produto.preco)+",00"}</Divpreco>
                <BotaoComprar onClick={handleClick}>Comprar</BotaoComprar> 
            </Col>
        </Row>

       
        </Container>
      </ListContainer>
        </StyledSection>
    );
}
export default Produto;

