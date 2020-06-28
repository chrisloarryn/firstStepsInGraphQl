const express = require('express');
const expressGraphQl = require('express-graphql');

const app = express();

app.use(
  '/graphql',
  expressGraphQl({
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log('Listening Port 4000');
});
