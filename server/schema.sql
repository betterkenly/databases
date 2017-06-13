CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int not null,
  message char(255) not null,
  primary key (id)
  -- foreign key messages (user) users (id)
);

CREATE TABLE users (
  id Int not null, 
  name char(20) not null,
  primary key (id)
);

CREATE TABLE rooms (
  id int not null,
  roomname char(20) not null,
  primary key (id)
);
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- select message from messages inner join users where users.name = 'sally' on users.id = messages.users