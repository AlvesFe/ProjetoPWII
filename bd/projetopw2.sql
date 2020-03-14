drop database ProjetoPWII;
create database ProjetoPWII;

use ProjetoPWII;

create table Pessoa(
    idPessoa int primary key auto_increment not null,
    nome varchar(150) not null,
    email varchar(150) not null unique,
    userName varchar(100) not null unique,
    senha varchar(30) not null,
    cargo varchar(30) not null default "cliente",
    dataNasc date not null,
    sexo varchar(15) not null,
    telFixo char(14),
    telCelular char(15),
    ativo varchar(10) not null default "ativo",
    rg varchar(12) not null unique,
    cpf varchar(14) not null unique
);