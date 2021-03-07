These demos connect to local or remote databases and expect there to be tables there such as `categories` and `words`. You can run the SQL in [create-tables.sql](./schema.sql) to create these.

# Setup

- Save a copy of the `.env.example` file as `.env`
- Edit `.env` so that DATABASE_URL has the full connection string in it for whichever db you want to connect to.
- If you haven't already, run the create-tables.sql script to create and populate database.

# Run a demo

```
node demo-query-local-db.js
```
