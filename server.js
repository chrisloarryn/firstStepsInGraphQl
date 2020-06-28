const express = require('express');
const expressGraphQl = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use(
  '/graphql',
  expressGraphQl({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log('Listening Port 4000');
});
