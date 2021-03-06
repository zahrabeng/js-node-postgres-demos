const { Client } = require("pg");

async function doDemo() {
  const client = new Client();
  await client.connect();

  const text = "select * from words where category_id = $1";
  const values = [1];

  const res = await client.query(text, values);
  console.log(res.rows);
  await client.end();
}

doDemo();
