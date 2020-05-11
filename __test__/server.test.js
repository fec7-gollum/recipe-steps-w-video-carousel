/* eslint-disable no-undef */
const supertest = require('supertest');

const app = require('../server/index.js');

const request = supertest(app);

// server tests
xdescribe('/api/steps/1', () => {
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

xdescribe('/api/videos/1', () => {
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
