import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import Schema from './server/graphql/schema/schema';
import http from 'http';
import mongoose from 'mongoose';
const config = require('./config.json');

const port = config.GRAPHQL_PORT || process.env.PORT || '3000';

const mongo = mongoose.connect(config.DB_URL);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB: connection error'));
db.once('open', function() {
  console.log("Connected to database");
});

var app = express();
/**
 * Get port from environment and store in Express.
 */
app.set('port', port);

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema: Schema
}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

// Get our API routes
const api = require('./server/routes/api');

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`GraphQL Server is now running on http://localhost:${port}/graphql`));


// // Get dependencies
// const express = require('express');
// const path = require('path');
// const http = require('http');
// import mongoose from 'mongoose';

// // Config

// // GraphQL Server imports
// import { apolloExpress, graphiqlExpress } from 'apollo-server';
// import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
// import bodyParser from 'body-parser';

// import Schema from './server/graphql/schema/schema';
// import Resolvers from './server/graphql/resolvers/resolvers';
// // GraphQL Models for BioTrack
// // import Supplier from './server/graphql/models/supplier';
// // import Subject from './server/graphql/models/subject';
// // import Body from './server/graphql/models/body';

// // For dummy data population only. REMOVE FOR PRODUCTION!
// import casual from 'casual';



// const app = express();

// // GraphQL stuff...
// const executableSchema = makeExecutableSchema({
//   typeDefs: Schema,
//   resolvers: Resolvers,
// });

// app.use('/graphql', bodyParser.json(), apolloExpress({
//   schema: executableSchema,
//   context: {},
// }));

// app.use('/graphiql', graphiqlExpress({
//   endpointURL: '/graphql',
// }));

// // Parsers for POST data
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// // Point static path to dist
// app.use(express.static(path.join(__dirname, 'dist')));

// // Set our api routes
// app.use('/api', api);

// // Catch all other routes and return the index file
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });
