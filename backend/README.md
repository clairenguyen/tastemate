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
