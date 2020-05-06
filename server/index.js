const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = 3003;
const db = require('../database/index.js');

app.use(bodyParser.json());
app.use('/:id', express.static(__dirname + '/../client/dist'));

const dbQuery = (sql, cb) => {
  db.con.query(sql, (err, result)=>{
    if (err) {
      console.log(`Data retrieval error: ${sql}`, err);
    }
    cb(result);
  });
};

app.get('/api/steps/:id', (req, res)=> {
  id = path.basename(req.url);
  let recipe = { id: id};
  let sqlString =
    `SELECT recipes.name, steps.text, steps.number, steps.id, steps.hasVideos
      FROM steps
      JOIN recipes
        ON recipes.id = steps.recipes_id
      WHERE recipes.id = ${id};`;
  dbQuery(sqlString, (result) => {
    recipe.name = result[0].name;
    recipe.steps = [];
    for (var i = 0; i < result.length; i++) {
      recipe.steps[i] = {
        id: result[i].id,
        number: result[i].number,
        text: result[i].text,
        hasVideos: result[i].hasVideos
      };

    }
    res.send(recipe);
  });
});

app.get('/api/videos/:id', (req, res)=> {
  id = path.basename(req.url);
  let sqlString =
    `SELECT videos.steps_id, videos.id, url
      FROM videos
      JOIN steps
        ON steps.id = videos.steps_id
      JOIN recipes
        ON recipes.id = steps.recipes_id
      WHERE recipes.id = ${id};`;
  dbQuery(sqlString, (result) => {
    res.send(result);
  });
});

app.listen(port, ()=> console.log(`recipe-steps listening at http://localhost:${port}`));
