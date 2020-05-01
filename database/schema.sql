DROP DATABASE IF EXISTS recipes;

CREATE DATABASE recipes;

USE recipes;

CREATE TABLE recipes (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE steps (
  recipes_id INT NOT NULL,
  id INT NOT NULL AUTO_INCREMENT,
  number INT NOT NULL,
  text TEXT NOT NULL,
  hasVideos TINYINT(1) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY(recipes_id)
    REFERENCES recipes(id)
);

CREATE TABLE  videos (
  steps_id INT NOT NULL,
  id INT NOT NULL,
  url VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY(steps_id)
    REFERENCES steps(id)
);