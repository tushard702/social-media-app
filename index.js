const {ApolloServer} = require("apollo-server-express");
const express = require("express");

const {typeDefs} = require("./typeDefs");
const {resolvers} = require("./resolvers");

const app = express();

const server = new ApolloServer({typeDefs, resolvers});

async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
startServer();

app.listen({port: 3001}, () => {
    console.log("server up on port 3001");
})
