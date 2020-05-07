/* eslint-disable no-console */
/* eslint-disable no-undef */

const db = require('../database/index.js');

const dbQuery = (sql, cb = () => {}) => {
  db.con.query(sql, (err, result) => {
    if (err) {
      console.log(`Data retrieval error: ${sql}`, err);
    }
    cb(result);
  });
};

// database tests
xdescribe('Database Test', () => {
  beforeAll(async () => {
    await db.con.query('USE bonappetit;');
  });

  test('Name should be Cinnamon-Date Sticky Buns when id = 1', async () => {
    await dbQuery('SELECT name FROM recipes WHERE id = 1;', (result) => {
      const response = result[0].name;
      expect(response).toEqual('Cinnamon-Date Sticky Buns');
    });
  });

  test('Should contain 100 unique recipes', async () => {
    await dbQuery('SELECT * FROM recipes;', (result) => {
      const response = result.length;
      expect(response).toEqual(100);
    });
  });
});
