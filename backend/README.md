# TastemateBackend

## Setup

This assumes you already have the Elixir and Erlang versions located in `../.tool-versions` installed as well as PostgreSQL running

Install the dependencies:

```
mix deps.get
```

Setup the database:

```
mix ecto.setup
```

Run migration to create tables, fill data:

```
mix ecto.migrate
```

Create a new migration:

```
mix ecto.gen.migration migration_name
```

Seed a database with initial data:

```
mix run priv/repo/seeds.exs
```

Run the server (server will be ran on port 4000):

```
mix phx.server
```

## Tests

To run tests:

```
mix test
```

To run tests in watch mode:

```
mix test.watch
```
