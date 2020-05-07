const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');

const app = express();

app.use(bodyParser.json());
app.use('/:id', express.static(path.join(__dirname, '/../client/dist')));

const dbQuery = (sql, cb) => {
  db.con.query(sql, (err, result) => {
    if (err) {
      console.log(`Data retrieval error: ${sql}`, err);
    }
    cb(result);
  });
};

app.get('/api/steps/:id', (req, res)=> {
  const id = path.basename(req.url);
  const recipe = {};
  recipe.id = id;

  const sqlString = `SELECT recipes.name, steps.text, steps.number, steps.id, steps.hasVideos
      FROM steps
      JOIN recipes
        ON recipes.id = steps.recipes_id
      WHERE recipes.id = ${id};`;
  dbQuery(sqlString, (result) => {
    recipe.name = result[0].name;
    recipe.steps = [];
    for (let i = 0; i < result.length; i += 1) {
      recipe.steps[i] = {
        id: result[i].id,
        number: result[i].number,
        text: result[i].text,
        hasVideos: result[i].hasVideos,
      };
    }
    res.send(recipe);
  });
});

app.get('/api/videos/:id', (req, res)=> {
  const id = path.basename(req.url);
  const sqlString = `SELECT videos.steps_id, videos.id, url
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

module.exports = app;
