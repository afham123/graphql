import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
// import { typeDefs } from './schema.js'    // types
// import { resolvers } from './resolver.js'
import { typedef } from './typedef/index.js'
import { db } from "./db/connect.js";
import { resolvers } from './resolver/index.js';
db.init();

// server setup
const server = new ApolloServer({
  typeDefs: typedef,
  resolvers : resolvers
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 4001 }
})

console.log(`Server ready at: ${url}`)