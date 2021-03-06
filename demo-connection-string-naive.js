const { Client } = require("pg");

async function doDemo() {
  //Bad practice here!
  //Good practice would be to read this string from an environment variable
  //NOT embed it in our code.

  //However, this is the simplest way to see how a pg client can be configured with a connection string

  const connectionString =
    "postgresql://dbuser:secretpassword@database.server.com:5432/mydb";

  const client = new Client({
    connectionString,
  });

  await client.connect();

  const result = await client.query("SELECT NOW()");
  console.log(result.rows);

  await client.end();
}

doDemo();
