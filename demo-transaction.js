//Adapted slightly from the official docs: https://node-postgres.com/features/transactions

//Sometimes we want a set of commands to run apparently as an atomic,
//unsplittable unit - all or nothing.  That's when we need a transaction.

// Here, to our quiz data, either we'll add a 'poets' category and three poets,
// or nothing at all.
// Run this demo and check in your database that
const { Pool } = require("pg");
const pool = new Pool();
async function doDemo() {
  // note: we don't try/catch this because if connecting throws an exception
  // we don't need to dispose of the client (it will be undefined)
  const client = await pool.connect();

  try {
    await client.query("BEGIN"); //mark the transaction start

    const res = await client.query(
      "INSERT INTO categories(name) VALUES($1) RETURNING id",
      ["poets"]
    );
    const category_id = res.rows[0].id; //the category id for poets.
    console.log("category_id for poets: ", category_id);

    await client.query("INSERT INTO words(category_id, word) VALUES ($1, $2)", [
      category_id,
      "Keats",
    ]);
    console.log("inserted poet: Keats");
    await client.query("INSERT INTO words(category_id, word) VALUES ($1, $2)", [
      category_id,
      "Neruda",
    ]);
    console.log("inserted poet: Neruda");

    //Let's say we now get the column name wrong in our next query.
    //In this case the whole transaction should be aborted,
    //with 'poets' category created, nor poets added to words.
    await client.query(
      "INSERT INTO words(category_id, POTATO) VALUES ($1, $2)",
      [category_id, "Shakespeare"]
    );
    console.log("inserted poet: Shakespeare");

    await client.query("COMMIT"); //commit the transaction, if we get this far without error
  } catch (e) {
    await client.query("ROLLBACK"); //roll-back, if we get an error
    throw e;
  } finally {
    client.release();
  }
}

doDemo().catch((e) => console.error(e.stack));
