import Listagemcat from '../Categorias/Listagemcat';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import {Ingressos} from '../../Ingressos';
import React,{ useEffect, useState } from 'react';
import {ListarCategoria, ListarEventos,  CriarCategoria} from '../../Requisicoes';

import Listagem from '../Listagem';
import { Button, Modal } from 'react-bootstrap';

const requisits = require('../../Requisicoes');
export default function Modalz() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleSubmit = () => {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'http://localhost:4002/categoria/cria', true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify({'id':`${id}`, 'nome':`${nome}`}));
        setShow(false)
    };
    const handleShow = () => setShow(true);
    const [nome, setNome] = useState('')
    const [id, setId] = useState('')
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Adicionar Categoria
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Nova Categoria</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              Id: <input onChange={event => setId(event.target.value)}></input>
              <br/><br/>
              Nome: <input onChange={event => setNome(event.target.value)}></input>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} >
              Close
            </Button>
            <Button variant="primary" onClick= {handleSubmit} >
              Adicionar Categoria
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  