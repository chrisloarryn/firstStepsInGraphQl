const graphql = require('graphql');

const { GraphQLObjectType, GraphQlString, GraphQlInt } = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: GraphQlString,
    },
    firstName: {
      type: GraphQlString,
    },
    age: {
      type: GraphQlInt,
    },
  },
});
