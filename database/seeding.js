const db = require('./index.js');
const faker = require('faker');

/*
for n Recipes

create recipe
give random name
  for each recipe generate m = {min 5 to max 15} steps
    for each step r.id = current n
    for each step number = current m
    text = random paragraph
    hasVideo = 0 or 1
      if hasVideo
      s.id = current m
      url = provided urls
*/

const dbQuery = (sql, errMessage, successMessage) => {
  db.con.query(sql, (err, result)=>{
    if (err) {
      console.log(errMessage, err);
    } console.log(successMessage);
  });
};

//create database structure iife
(()=> {
  let querryString = 'DROP DATABASE IF EXISTS recipes;';
  dbQuery(querryString, `Err: ${querryString}`, `Success ${querryString}`);

  querryString = 'CREATE DATABASE recipes;';
  dbQuery(querryString, `Err: ${querryString}`, `Success ${querryString}`);

  querryString = 'CREATE TABLE recipes (\
    id INT NOT NULL AUTO_INCREMENT, \
    name VARCHAR(255) NOT NULL, \
    PRIMARY KEY (id)\
    );';
  dbQuery(querryString, `Err: ${querryString}`, `Success ${querryString}`);

  querryString = 'CREATE TABLE steps (\
    recipes_id INT NOT NULL, \
    id INT NOT NULL AUTO_INCREMENT, \
    number INT NOT NULL, \
    text TEXT NOT NULL, \
    hasVideos TINYINT(1) NOT NULL, \
    PRIMARY KEY (id), \
    FOREIGN KEY(recipes_id) \
      REFERENCES recipes(id) \
  );';
  dbQuery(querryString, `Err: ${querryString}`, `Success ${querryString}`);

  querryString = 'CREATE TABLE  videos (\
    steps_id INT NOT NULL, \
    url VARCHAR(255) NOT NULL, \
    PRIMARY KEY (id), \
    FOREIGN KEY(steps_id) \
      REFERENCES steps(id) \
  );';
  dbQuery(querryString, `Err: ${querryString}`, `Success ${querryString}`);
})();

var seed = function(n) {

};



/*
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
*/