import React from "react";
import $ from "jquery";


export function ListarEventos(){
    var resposta = [{}]
    $.ajax({
        url: "http://localhost:4002/evento",
        type: "GET",
        contentType: "application/json",
        success: function (result) {
            console.log(result)
        },
        error: function (result, status) {
            return result
        }
    });
    return resposta
}


export function ListarCategoria(){
    let resposta
    $.ajax({
        url: "http://localhost:4002/categoria",
        type: "GET",
        dataType: 'json',
        contentType: "application/json",
        success: function (result) {
            console.log(result)
        },
        error: function (result, status) {
            return result
        }
    });
    console.log(resposta)
    return resposta
}


export function CriarCategoria(props){
    $.ajax({
        type: "POST",
        url: `http://localhost:4002/categoria/cria/?id='${props.id}+'&nome='${props.nome}`,
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify({'id':props.id, 'nome':props.nome}), 
        success: function(result){
            console.log(result)
        },
      });
}

export function ExcluiCategoria(props){
    $.ajax({
        type: "DELETE",
        url: `http://localhost:4002/categoria/exclui/?id='${props.id}`,
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify({'id':props.id, 'nome':props.nome}), 
        success: function(result){
            console.log(result)
        },
      });
}

