drop database if exists tratamentos;
create database tratamentos charset=UTF8 collate utf8_general_ci;
use tratamentos;

create table profissionais(
    id integer primary key not null auto_increment,
    nome varchar(50) not null,
    especialidade varchar(50) not null
);

create table consultas(
    id integer primary key not null auto_increment,
    paciente varchar(50) not null,
    data Date not null,
    horario Time not null,
    profissional integer not null,
    foreign key (profissional) references profissionais(id)
);

create table tratamentos(
    id integer primary key not null auto_increment,
    consulta integer not null,
    nome varchar(50) not null,
    valor decimal(10,2) not null,
    foreign key (consulta) references consultas(id) on delete cascade
);

LOAD DATA INFILE 'C:/Users/Professor/Desktop/vpf01/docs/profissionais.csv'
INTO TABLE profissionais
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Professor/Desktop/vpf01/docs/consultas.csv'
INTO TABLE consultas
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Professor/Desktop/vpf01/docs/tratamentos.csv'
INTO TABLE tratamentos
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

create view vw_tratamentos as
select p.id as profissional_id, p.nome, p.especialidade, c.id as consulta_id, c.paciente, c.data, c.horario, t.id as tratamento_id, t.nome as tratamento, t.valor
from profissionais p inner join consultas c on p.id = c.profissional
inner join tratamentos t on c.id = t.consulta;

select * from vw_tratamentos;