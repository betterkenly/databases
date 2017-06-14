CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  username VARCHAR(20) NULL DEFAULT NULL,
  message VARCHAR(200) NULL DEFAULT NULL,
  roomname VARCHAR(20) NULL DEFAULT NULL
  primary key (id)
  -- foreign key messages (user) users (id)
);

CREATE TABLE userid (
  id INTEGER NULL AUTO_INCREMENT NULL, 
  username VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- select message from messages inner join users where users.name = 'sally' on users.id = messages.users