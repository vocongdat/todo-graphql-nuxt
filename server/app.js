import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import http from 'http';
import connect from './config/db/index.js';

// Load schema & resolvers
import resolvers from './resolver/resolver.js';
import typeDefs from './schema/schema.js';

// Load db methods
import mongoDataMethods from './config/method/index.js';

const PORT = 5000;

const startApolloServer = async (typeDefs, resolvers) => {
    const app = express();

    const httpServer = http.createServer(app);

    await connect();

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: () => ({ mongoDataMethods }),
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });
    await server.start();

    server.applyMiddleware({ app, path: server.graphqlPath });

    httpServer.listen({ port: process.env.PORT || PORT }, () => {
        console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
    });
};

startApolloServer(typeDefs, resolvers);
