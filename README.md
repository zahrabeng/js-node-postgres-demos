# What's this?

This repo contains a few demos of how to connect and query a database in javascript, using the node-postgres library (`pg`).

# pre-reqs

These demos attempt to connect to local or remote databases and expect the DB to contain tables such as `categories` and `words`.

# Setting up the demo database

Run this in your terminal

```
sudo -u postgres createdb demos
```

- Then connect to the database (as academy) (e.g. with beekeeper studio) and run all of the sql in [create-tables.sql](./create-tables.sql). This will create and populate the tables required for the demo.

# Setting up your connection

- Save a copy of the `.env.example` file as `.env`
- Edit `.env` so that DATABASE_URL has the full connection string in it for whichever db you want to connect to.

For example, if you want to connect to the local demos db, your connection string might look like this:
`DATABASE_URL=postgresql://academy@localhost/demos`

# Run a demo

```
node demo-query-local-db.js
```
