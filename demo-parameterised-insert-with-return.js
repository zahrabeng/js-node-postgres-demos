const { Client } = require("pg");

async function doDemo() {
  const client = new Client({ database: 'demos' });
  await client.connect();

  const text =
    "INSERT INTO words(word, category_id) VALUES($1, $2) RETURNING *";
  const values = ["glasgow", 1];

  const res = await client.query(text, values);

  //The returning clause causes the newly created row to be returned
  //including, for example, any auto-assigned ID.
  console.log(res.rows[0]);

  await client.end();
}

doDemo();
