/* Schema for SQL database/table. We haven't discussed this type of file yet */
DROP DATABASE IF EXISTS employeetracker;

/* Create database */
CREATE DATABASE employeetracker;
USE employeetracker;

/* Create new table with a primary key that auto-increments, and a text field */
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE job (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,4) NULL,
  department_id INT NOT NULL, 
  PRIMARY KEY (id)
);
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  job id
  manager id
  PRIMARY KEY (id)
);