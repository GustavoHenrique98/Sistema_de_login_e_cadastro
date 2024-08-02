create database cadastro;
 -- drop database cadastro;
use cadastro;

create table usuarios (
	id_usuario int primary key not null auto_increment,
    username varchar(200),
    password varchar(200),
    email varchar(200)
);