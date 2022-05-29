
import React,{ useEffect, useState } from 'react';
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Listagem from '../Listagem';
import { Button, Modal } from 'react-bootstrap';

const requisits = require('../../Requisicoes');


export default function ModalEdita(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    
    const handleSubmit = () => {
        var xhr = new XMLHttpRequest();
        xhr.open("PUT", `http://localhost:4002/categoria/atualiza/${props.id}`, true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify({'nome':`${nome}`}));
        setShow(false)
    };

    const handleShow = () => setShow(true);
    const [nome, setNome] = useState('')
    const [id, setId] = useState('')
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
        <FontAwesomeIcon icon={faPenToSquare}/>
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edição de Categoria</Modal.Title>
          </Modal.Header>
          <Modal.Body>
             
              Nome: <input onChange={event => setNome(event.target.value)}></input>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} >
              Close
            </Button>
            <Button variant="primary" onClick= {handleSubmit} >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  