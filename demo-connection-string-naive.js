const { Client } = require("pg");

async function doDemo() {
  //Bad practice here!
  //We'd really read this string from an environment variable - not embed it in our code!
  // const connectionString = "postgresql://dbuser@localhost:5432/mydb";
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
