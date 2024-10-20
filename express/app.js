import express from "express";
import { createHandler } from "graphql-http/lib/use/express"
import { buildSchema } from "graphql";
import { typeDefs } from './schema.js';
import { resolvers } from './resolver.js'

const schema = buildSchema(typeDefs);
const app = express();
const handler = createHandler({
    schema: schema,
    rootValue: resolvers,
})

app.all("/graphql",handler);

// Start the server at port
app.listen(4000)
console.log("Running a GraphQL API server at http://localhost:4000/graphql")