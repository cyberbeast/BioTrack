// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
import mongoose from 'mongoose';

// Config
const config = require('./config.json');

// GraphQL Server imports
import { apolloExpress, graphiqlExpress } from 'apollo-server';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import bodyParser from 'body-parser';

import Schema from './server/graphql/schema/schema';
import Resolvers from './server/graphql/resolvers/resolvers';
// GraphQL Models for BioTrack
import Supplier from './server/graphql/models/supplier';
import Body from './server/graphql/models/body';

// For dummy data population only. REMOVE FOR PRODUCTION!
import casual from 'casual';

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// GraohQL stuff...
const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers,
});

app.use('/graphql', bodyParser.json(), apolloExpress({
  schema: executableSchema,
  context: {},
}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

const mongo = mongoose.connect(config.DB_URL);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("DB Connected!");
  casual.seed(123);

  var dummy_supplier = new Supplier({
    name: casual.name,
    description: casual.short_description,
  });
  
  dummy_supplier.save(function (err, supplier) {
    console.log("Added Supplier: ", supplier.id);

    var dummy_body = new Body({
      name: casual.name,
      supplier: supplier.id
    });

    dummy_body.save(function (err, body) {
      console.log("Added Body: \t" + body.id);
    });

  });
});

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = config.GRAPHQL_PORT || process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`GraphQL Server is now running on http://localhost:${port}/graphql`));