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

db.con.connect((err)=>{
  if (err) {
    console.log('Error connecting database, Cannot seed database.', err);
  } console.log('Connected to database. Begin seeding database.')
});

var seed = function(n) {

};
