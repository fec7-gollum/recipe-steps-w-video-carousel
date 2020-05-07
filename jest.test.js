const supertest = require('supertest');
const app = require('./server/index.js');
const db = require('./database/index.js');

const request = supertest(app);

const dbQuery = (sql, cb = () => {}) => {
  db.con.query(sql, (err, result) => {
    if (err) {
      console.log(`Data retrieval error: ${sql}`, err);
    }
    cb(result);
  });
};


// server tests
describe('/api/steps/1', () => {
  test('It should respond with 13 steps for id = 1', async () => {
    const response = await request.get('/api/steps/1');
    expect(response.body.steps.length).toBe(13);
    expect(response.statusCode).toBe(200);
  });

  test('It should be in correct format', async () => {
    const response = await request.get('/api/steps/1');
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('steps');
    expect(Array.isArray(response.body.steps)).toEqual(true);
  });

  test('It should have recipes.id = 1', async () => {
    const response = await request.get('/api/steps/1');
    expect(response.body.id).toEqual('1');
  });
});

describe('/api/videos/1', () => {
  test('It should respond with 14 videos for id = 1', async () => {
    const response = await request.get('/api/videos/1');
    expect(response.body.length).toBe(14);
    expect(response.statusCode).toBe(200);
  });

  test('It should be in correct format', async () => {
    const response = await request.get('/api/videos/1');
    expect(response.body[0]).toHaveProperty('steps_id');
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('url');
    expect(Array.isArray(response.body)).toEqual(true);
  });
});



// database tests

describe('Database Test', () => {
  beforeAll (async () => {
    await db.con.query('USE bonappetit;');
  });

  test('Name should be Cinnamon-Date Sticky Buns when id = 1', async ()=> {
    await dbQuery('SELECT name FROM recipes WHERE id = 1;', (result) => {
      const response = result[0].name;
      expect(response).toEqual('Cinnamon-Date Sticky Buns');
    });
  });

  test('Should contain 100 unique recipes', async ()=> {
    await dbQuery('SELECT * FROM recipes;', (result) => {
      const response = result.length;
      expect(response).toEqual(100);
    });
  });

});
