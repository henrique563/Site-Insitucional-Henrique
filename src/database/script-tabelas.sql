-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!
/* para workbench - local - desenvolvimento */

create database Racers;
use Racers;

create table Carro (
idCarro int primary key auto_increment,
nomeCarro varchar(45)
) auto_increment = 1000;

create table Usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
marca varchar(45),
modelo varchar(45),
email varchar(45),
senha varchar(45)
);

create table votacao (
idVoto int primary key auto_increment,
fkCarro int,
foreign key (fkCarro) references Carro(idCarro)
);

insert into Carro values (null, 'Nissan 350Z'),
						 (null, 'Mitsubishi Lancer Evolution'),
                         (null, 'Subaru Impreza WRX STI'),
                         (null, 'Audi RS3'),
                         (null, 'Nissan Silvia S14');

select * from Usuario;