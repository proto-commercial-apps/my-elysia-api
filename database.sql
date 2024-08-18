CREATE DATABASE finance;

USE finance;

CREATE TABLE users (
   id INT AUTO_INCREMENT PRIMARY KEY,
   username VARCHAR(50) NOT NULL,
   password VARCHAR(255) NOT NULL
);

CREATE TABLE transactions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  amount DECIMAL(10, 2) NOT NULL,
  type ENUM('income', 'expense') NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);