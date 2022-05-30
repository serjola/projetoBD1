import Listagemcat from '../Categorias/Listagemcat';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import {Ingressos} from '../../Ingressos';
import React,{ useEffect, useState } from 'react';

import Listagem from '../Listagem';
import { Button, Modal } from 'react-bootstrap';

const requisits = require('../../Requisicoes');
export default function ModalCriaEvento() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleSubmit = () => {
        console.log(datas)
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'http://localhost:4002/evento/cria', true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify({'id':`${id}`, 'titulo':`${titulo}`, 'descricao':`${descricao}`, 'data':`{${datas}}`}));
        setShow(false)
    };
    const handleShow = () => setShow(true);


    const [id, setId] = useState('')
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [datas, setDatas] = useState('')

  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Adicionar Evento
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Novo Evento</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              Id: <input onChange={event => setId(event.target.value)}></input>
              <br/><br/>
              Título: <input onChange={event => setTitulo(event.target.value)}></input>
              <br/><br/>
              Descricao: <input onChange={event => setDescricao(event.target.value)}></input>
              <br/><br/>
              Data: <input type="date" onChange={event => setDatas(event.target.value)}></input>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} >
              Fechar
            </Button>
            <Button variant="primary" onClick= {handleSubmit} >
              Adicionar Evento
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  