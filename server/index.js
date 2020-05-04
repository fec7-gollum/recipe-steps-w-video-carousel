const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = 3003;
const db = require('../database/index.js');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

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
  // let recipe = {
  //   id: number,
  //   name: string,
  //   steps: [
  //     //expect multiple steps per recipe
  //     {
  //       recipeId: number,
  //       id: number,
  //       number: number,
  //       text: string,
  //       hasVideos: boolean
  //     },
  //   ],
  //   videos: [
  //     //expect multiple videos per recipe
  //     {
  //       stepId: number,
  //       url: string
  //     },
  //   ]
  // };
  let recipe = {};
  let sqlString = `SELECT DISTINCT recipes.name, steps.number, steps.text, steps.hasVideos, videos.url FROM recipes RIGHT JOIN steps ON recipes.id = steps.recipes_id RIGHT JOIN videos ON steps.id = videos.steps_id WHERE recipes.id = ${id} ORDER BY steps.number ASC;`;
  dbQuery(sqlString, (result) => {
    res.send(result);
  });
  // console.log(JSON.stringify(recipe));

});

app.listen(port, ()=> console.log(`recipe-steps listening at http://localhost:${port}`));
