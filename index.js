const express = require('express');
const app = express();
const productTables = require('./models/productTables');
const reviewTables = require('./models/reviewTables');
const qaTables = require('./models/qaTables');
const setupTables = require('./middleware/setupTables');

const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1',
});

const keyspaces = ['products', 'reviews', 'qa'];

const keyspaceQuery = `CREATE KEYSPACE IF NOT EXISTS products WITH 
replication = {'class': 'SimpleStrategy', 'replication_factor' : '3'};`;

function keyspaceGenerator() {
  const promises = keyspaces.map((keyspace) => {
    const query = `CREATE KEYSPACE IF NOT EXISTS ${keyspace} WITH 
    replication = {'class': 'SimpleStrategy', 'replication_factor' : '3'};`;
    return client.execute(query);
  });
  return promises;
}

Promise.all(keyspaceGenerator())
  .then(() => {
    console.log('keyspace created');
    return Promise.all([
      setupTables(client, productTables),
      setupTables(client, reviewTables),
      setupTables(client, qaTables),
    ]);
  })
  .then(() => {
    console.log('queries created');
  })
  .catch((err) => console.error(err));

app.listen(4020);
