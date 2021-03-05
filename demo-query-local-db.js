const { Client } = require("pg");

async function doDemo() {
  const client = new Client();
  await client.connect();
  const res = await client.query("SELECT * from categories");
  console.log(res.rows);
  await client.end();
}

doDemo();
