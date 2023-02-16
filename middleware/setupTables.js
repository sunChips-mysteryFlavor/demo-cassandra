async function setupTables(client, queries) {
  for (let query of queries) {
    try {
      await client.execute(query);
    } catch (err) {
      console.error(err);
    }
  }
}
module.exports = setupTables;
