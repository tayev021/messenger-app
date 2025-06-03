import { app } from './app.js';

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`\x1b[33m[server]\x1b[0m Server is listening at port ${port} `);
});
