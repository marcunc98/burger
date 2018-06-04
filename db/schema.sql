CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table tasks.
CREATE TABLE burger (
	id int NOT NULL AUTO_INCREMENT,
	burgerName varchar(100) NOT NULL,
	devoured BOOLEAN,
	PRIMARY KEY (id)
);