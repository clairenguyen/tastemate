# TasteMate

An app where users can swipe on restaurant options to help decide on where to eat.

This is a project for 8th Light devs to practice React, learn new tools, and have fun.

## Tech Stack

- React
- Typescript
- Next.js
- React Testing Library
- Tailwind CSS
- Elixir

## Versions

- Elixir 1.14.4
- Erlang 26.1.1
- Node 20.4.0

## asdf

`asdf` is a multiple runtime version manager

Follow the installation guide. Once you have installed `asdf`, install the required plugins:

```
asdf plugin-add elixir https://github.com/asdf-vm/asdf-elixir.git
asdf plugin add erlang https://github.com/asdf-vm/asdf-erlang.git
```

Then in the root directory (where `.tool-versions` is), run:

```
asdf install
```

Verify you have the correct versions:

```
elixir -v
node -v
```

## Setting up and starting the application

For specific instructions on how to setup and run the Elixir backend or React frontend, see the READMEs in the respective `backend` and `frontend` directories.

Alternatively, you can install and start your backend and frontend from the project root directory using a single command via the `concurrently` package.

```shell
npm install # installs all dependencies for backend, frontend, and `concurrently`
npm start # starts both the backend and frontend servers
npm test # runs both the backend and frontend tests

npm run frontend:install
npm run backend:install

npm run frontend:start
npm run backend:start

npm run backend:test
npm run frontend:test
```
