/* eslint-disable no-console */
const port = 3003;
const app = require('./index.js');

app.listen(port, () => console.log(`recipe-steps listening at http://localhost:${port}`));
