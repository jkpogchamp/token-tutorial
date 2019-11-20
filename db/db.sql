create database tutorial;

use tutorial;

create table users(
id int not null auto_increment primary key,
username varchar(30) not null,
password text not null
);
