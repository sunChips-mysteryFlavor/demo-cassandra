async function setupTables(client, queries) {
  console.log('hit');
  for (let query of queries) {
    try {
      await client.execute(query);
      console.log(`created ${query}`);
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = setupTables;
