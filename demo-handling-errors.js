const { Client } = require("pg");

//Try changing the SQL in this function to make a mistake and
// see how the resulting error is handled.
async function doDemo() {
  const client = new Client();
  await client.connect();

  try {
    const result = await client.query("SELECT * from categories");
    console.log(result.rows);
    console.log("no error occurred, results are above.");
  } catch (e) {
    console.error(e.stack);
  } finally {
    console.log("closing connection, whether or not an error occurred.");
    client.end();
  }

  console.log("continuing normally");
}

doDemo();
