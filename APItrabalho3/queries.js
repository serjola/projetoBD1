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

const getEventobyID = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM hospital.medico WHERE cpf = $1 ',[id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

const adicionaEvento = (request, response) => {
    console.log(request.body)
    pool.query(`
     INSERT INTO vendaingresso.evento 
     (cpf,idregistro,numcrm,especialidade,salario) VALUES ($1, $2, $3, $4, $5) `,[cpf,idregistro,numcrm,especialidade,salario], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

const atualizaEvento = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query (`

    UPDATE hospital.medico 
    SET  cpf=$1 WHERE id = $2`, [cpf,id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const excluiEvento = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query (`

    DELETE FROM hospital.medico 
    WHERE  cpf=$1`, [id], (error, results) => {
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

const getCategoria = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM hospital.medico WHERE cpf = $1 ',[id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
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
  pool.query (`

  UPDATE hospital.medico 
  SET  cpf=$1 WHERE id = $2`, [cpf,id], (error, results) => {
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
      getEventobyID,
      adicionaEvento,
      atualizaEvento,
      excluiEvento,
      getCategorias,
      getCategoria,
      adicionaCategoria,
      atualizaCategoria,
      excluiCategoria

  }

