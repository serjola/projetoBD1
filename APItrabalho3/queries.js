const Pool = require('pg').Pool
const pool = new Pool({
    user: 'sergio',
    host: 'dbufs-sergio.c64hjycyfyrz.us-east-1.rds.amazonaws.com',
    database: 'db_1UFS6S',
    password: '310819',
    port: 5432,
})


const getEventos = (request, response) => {
    pool.query('SELECT * FROM vendaingresso.evento', (error, results) => {
      if (error) {
        throw error
      }       
      response.status(200).json(results.rows)
    })
  }


const adicionaEvento = (request, response) => {
    const id = parseInt(request.body.id)
    const titulo = request.body.titulo
    const descricao = request.body.descricao
    const datas = request.body.data
    pool.query(`
     INSERT INTO vendaingresso.evento 
     (id,titulo,descricao,datas) VALUES ($1, $2, $3, $4) `,[id,titulo,descricao,datas], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

const atualizaEvento = (request, response) => {
  const id = parseInt(request.params.id)
  var titulo = request.body.titulo;
  var descricao = request.body.descricao;

  if(descricao == "" && titulo !== ""){
    pool.query (`

    UPDATE vendaingresso.evento
    SET  titulo=$1 WHERE id = $2`, [titulo,id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }else if(descricao !== "" && titulo === ""){
    pool.query (`

    UPDATE vendaingresso.evento
    SET  descricao=$1 WHERE id = $2`, [descricao,id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }else if(descricao !== "" && titulo !== ""){
    pool.query (`

    UPDATE vendaingresso.evento
    SET  descricao=$1 , titulo=$2 WHERE id = $3`, [descricao,titulo,id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

}

const excluiEvento = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query (`

    DELETE FROM vendaingresso.evento 
    WHERE  id=$1`, [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

// TABELA CATEGORIAS

const getCategorias = (request, response) => {
  pool.query('SELECT * FROM vendaingresso.categoria', (error, results) => {
    if (error) {
      throw error
    }       
    response.status(200).send(results.rows)
  })

}


const adicionaCategoria = (req, res) => {
  var id = req.body.id;
  var nome = req.body.nome;
  pool.query(`
   INSERT INTO vendaingresso.categoria 
   (id,primeironome,sobrenome) VALUES ($1, $2, '')`,[id,nome], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

const atualizaCategoria = (request, response) => {
  const id = parseInt(request.params.id)
  var nome = request.body.nome;

  pool.query (`

  UPDATE vendaingresso.categoria
  SET  primeironome=$1 WHERE id = $2`, [nome,id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const excluiCategoria = (request, response) => {
  const id = parseInt(request.params.id)
  pool.query (`

  DELETE FROM vendaingresso.categoria  
  WHERE  id=$1`, [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

  module.exports ={
      getEventos,
      adicionaEvento,
      atualizaEvento,
      excluiEvento,
      getCategorias,
      adicionaCategoria,
      atualizaCategoria,
      excluiCategoria

  }

