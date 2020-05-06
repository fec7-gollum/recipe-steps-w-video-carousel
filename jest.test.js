const request = require('supertest');
const app = require('./server/index.js' );
const db = require('./database/index.js');



//server tests
describe('Server API Tests', ()=>{
  describe('/api/steps/', ()=>{
    test('It should respond with 13 steps for id = 1', async () => {
      const response = await request(app).get('/api/steps/1');
      expect (response.body)
    })
  })
})

//database tests

// describe('Database Test', () => {
//   test('Database Bon Appetit', ()=> {
//   });
// });