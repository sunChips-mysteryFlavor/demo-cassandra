const express = require('express');
const app = express();
const tables = require('./models/tables');
const setupTables = require('./middleware/setupTables');

const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1',
});

const keyspaceQuery = `CREATE KEYSPACE IF NOT EXISTS products WITH 
replication = {'class': 'SimpleStrategy', 'replication_factor' : '3'}`;

client
  .execute(keyspaceQuery)
  .then(() => {
    console.log('keyspace created');
    return setupTables(client, tables);
  })
  .then(() => {
    console.log('queries created');
  });

app.listen(3020);
