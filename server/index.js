const express = require('express');
const app = express();
const bodyParser = require('body-parser');
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

app.get('/1/steps', (req, res)=> {
  let sqlString = 'SELECT name FROM recipes WHERE id = 1;';
  dbQuery(sqlString, (result) => console.log(result));
  res.end();
});

app.listen(port, ()=> console.log(`recipe-steps listening at http://localhost:${port}`));

/*

const recipe = {
  id: number,
  name: string,
  steps: [
    //expect multiple steps per recipe
    {
      recipeId: number,
      id: number,
      number: number,
      text: string,
      hasVideos: boolean
    },
  ],
  videos: [
    //expect multiple videos per recipe
    {
      stepId: number,
      url: string
    },
  ]
};

*/