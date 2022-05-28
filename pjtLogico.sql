CREATE SCHEMA vendaingresso;

CREATE DOMAIN vendaingresso.login AS VARCHAR(7);

CREATE TYPE status AS enum ('ativo','inativo');

CREATE TABLE vendaingresso.usuario(
	loginuser VARCHAR(30) NOT NULL,
	senha VARCHAR(32) NOT NULL,
	email VARCHAR(32) NOT NULL,
	
	CONSTRAINT pk_user PRIMARY KEY (loginuser)
);

CREATE TABLE vendaingresso.cliente(
	cpf INTEGER NOT NULL,
	primeironome VARCHAR(20) NOT NULL,
	sobrenome VARCHAR(20) NOT NULL,
	telefone VARCHAR(32)[],
	loginuser VARCHAR(30) NOT NULL,

	CONSTRAINT pk_cliente PRIMARY KEY (cpf),
	CONSTRAINT fk_cliente FOREIGN KEY (loginuser) REFERENCES vendaingresso.usuario(loginuser)
);

CREATE TABLE vendaingresso.organizador(
	primeironome VARCHAR(20) NOT NULL,
	sobrenome VARCHAR(20) NOT NULL,
	cnpj VARCHAR(14) NOT NULL,
	loginuser VARCHAR(30) NOT NULL,

	CONSTRAINT fk_organizador FOREIGN KEY (loginuser) REFERENCES vendaingresso.usuario(loginuser),
	CONSTRAINT pk_organizador PRIMARY KEY (cnpj)
);

CREATE TABLE vendaingresso.admin(
	primeironome VARCHAR(20) NOT NULL,
	sobrenome VARCHAR(20) NOT NULL,

	CONSTRAINT pk_admin PRIMARY KEY (primeironome)
);

CREATE TABLE vendaingresso.evento(
	id INTEGER NOT NULL,
	titulo VARCHAR(255) NOT NULL,
    descricao TEXT,
    datas DATE[] ,

	CONSTRAINT pk_evento PRIMARY KEY (id)
);

CREATE TABLE vendaingresso.categoria(
	id INT NOT NULL,
	primeironome VARCHAR(20) NOT NULL,
	sobrenome VARCHAR(20) NOT NULL,
	
	CONSTRAINT pk_categoria PRIMARY KEY (id)
);

CREATE TABLE vendaingresso.mantem(
	data DATE NOT NULL,
	operacao status NOT NULL,

	CONSTRAINT pk_mantem PRIMARY KEY (data)
);

CREATE TABLE vendaingresso.local(
	id INT NOT NULL,
	nome VARCHAR(40) NOT NULL,

	CONSTRAINT pk_local PRIMARY KEY (id)
);

CREATE TABLE vendaingresso.endereco(
	id INT NOT NULL,
	cep INTEGER NOT NULL,
	rua VARCHAR(30)	NOT NULL,
	bairro VARCHAR(20),
	estado VARCHAR(20),
	pais VARCHAR(20),

	CONSTRAINT pk_endereco PRIMARY KEY (id)	
);

CREATE TABLE vendaingresso.localizado(
	numero INTEGER,
	complemento VARCHAR(30),

	CONSTRAINT pk_localizado PRIMARY KEY (numero)
);

CREATE TABLE  vendaingresso.sala(
	id INT NOT NULL,
	nome VARCHAR(40) NOT NULL,
	descricao TEXT,
	capacidade INTEGER NOT NULL,
	idlocal INTEGER NOT NULL,

	CONSTRAINT fk_sala FOREIGN KEY (idlocal) REFERENCES vendaingresso.local(id),
	CONSTRAINT pk_sala PRIMARY KEY (id)
);

CREATE TABLE vendaingresso.assentos(
	id INT NOT NULL,
	descricao TEXT NOT NULL,
	status status NOT NULL,
	idSala INT NOT NULL,


	CONSTRAINT fk_assentos FOREIGN KEY (idSala) REFERENCES vendaingresso.sala(id),
	CONSTRAINT pk_assentos PRIMARY KEY (id)
);


CREATE TABLE  vendaingresso.tipoIngresso(
	id INT NOT NULL,
	titulo VARCHAR(40) NOT NULL,
	valorbase REAL,

	CONSTRAINT pk_tipoIngresso PRIMARY KEY (id)	
);

CREATE TABLE vendaingresso.opcoescategorias(
	valor REAL NOT NULL,

	CONSTRAINT pk_opcoescategorias PRIMARY KEY (valor)
);




CREATE TABLE vendaingresso.boleto(
	numero VARCHAR(60) NOT NULL,

	CONSTRAINT pk_boleto PRIMARY KEY (numero)
);

CREATE TABLE vendaingresso.pix(
   copiacola VARCHAR(60) NOT NULL,

   CONSTRAINT pk_pix PRIMARY KEY (copiacola)
);

CREATE TABLE vendaingresso.cartaodecredito(
   id INTEGER NOT NULL,
   numero VARCHAR(16) NOT NULL,
   titular VARCHAR(60) NOT NULL,
   cpf varchar(11) NOT NULL,
   data DATE NOT NULL,


   CONSTRAINT pk_cartaodecredito PRIMARY KEY (id)
);

CREATE TABLE vendaingresso.formasdePagamento(
	id INT NOT NULL,
	resposta INTEGER NOT NULL,
	copiaecola VARCHAR(255) NOT NULL DEFAULT '',
	numboleto VARCHAR(255) NOT NULL DEFAULT '',
	idcartaocredito INT NOT NULL,

	CONSTRAINT pk_formasdePagamento PRIMARY KEY (id),
	CONSTRAINT fk_formasdePagamentoboleto FOREIGN KEY (numboleto) REFERENCES vendaingresso.boleto(numero),
	CONSTRAINT fk_formasdePagamentopix FOREIGN KEY (copiaecola) REFERENCES vendaingresso.pix(copiacola),
	CONSTRAINT fk_formasdePagamentocredito FOREIGN KEY (idcartaocredito) REFERENCES vendaingresso.cartaodecredito(id)
	
);



CREATE TABLE vendaingresso.pagamento(
	valor REAL NOT NULL,
	status status NOT NULL,
	parcelas INTEGER NOT NULL,
	idformapagamento INT NOT NULL,
	
	CONSTRAINT pk_pagamento PRIMARY KEY (valor),
	CONSTRAINT fk_pagamento FOREIGN KEY (idformapagamento) REFERENCES vendaingresso.formasdePagamento(id)
	
);


CREATE TABLE vendaingresso.cadastra(
	idpromo INTEGER NOT NULL,
	valor REAL DEFAULT 0,
	dataexpiracao DATE NOT NULL,
	cnpj VARCHAR(14) NOT NULL,

	CONSTRAINT pk_cadastra PRIMARY KEY (idpromo),
	CONSTRAINT uq_cadastra UNIQUE (idpromo,cnpj),
	CONSTRAINT fk_cadastra FOREIGN KEY (cnpj) REFERENCES vendaingresso.organizador(cnpj)
	
);

CREATE TABLE vendaingresso.promocao(
	numero INTEGER NOT NULL,
	data_inicio DATE NOT NULL,
	data_fim DATE NOT NULL,
	porcentagem REAL NOT NULL,
	idpromo INTEGER NOT NULL,

	CONSTRAINT pk_promocao PRIMARY KEY (numero),
	CONSTRAINT uq_promo UNIQUE (porcentagem),
	CONSTRAINT fk_promocao FOREIGN KEY (idpromo) REFERENCES vendaingresso.cadastra(idpromo)
	
);


CREATE TABLE vendaingresso.desconto(
	porcentagem REAL NOT NULL,

	CONSTRAINT fk_desconto FOREIGN KEY (porcentagem) REFERENCES vendaingresso.promocao(porcentagem),
	CONSTRAINT pk_desconto PRIMARY KEY (porcentagem)
);

CREATE TABLE vendaingresso.ingresso(
	id INT NOT NULL,
	status status NOT NULL,
	idevento INT NOT NULL,
	desconto REAL NOT NULL,
	tipoingresso INTEGER NOT NULL,

	CONSTRAINT fk_desconto FOREIGN KEY (desconto) REFERENCES vendaingresso.desconto(porcentagem),
	CONSTRAINT fk_ingresso FOREIGN KEY (idevento) REFERENCES vendaingresso.evento(id),
	CONSTRAINT fk_tipoingresso FOREIGN KEY (tipoingresso) REFERENCES vendaingresso.tipoIngresso(id),
	CONSTRAINT pk_ingresso PRIMARY KEY (id)
);
