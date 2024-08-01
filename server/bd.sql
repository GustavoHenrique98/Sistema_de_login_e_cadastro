create database cadastro;
use cadastro;

create table usuarios (
	id_usuario int primary key not null auto_increment,
    username varchar(200),
    password varchar(200),
    email varchar(200)
);

INSERT INTO usuarios (username,password,email) 
values
('Gustavo','33535455','gustavo@example.com'),
('Heveny','55663353','heveny@example.com');

select*from usuarios;