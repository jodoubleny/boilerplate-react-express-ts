# Boilerplate for React client / Vite + Express + TypeScript

- `yarn` workspace is used.
- `vite` is used.
- `"@yarnpkg/sdks`, `typescript` are for TypeScript environment for `Yarn Berry`.
- `concurrently` is for running client, server at the same time.

## Server

- `ts-node` is only for development due to the performance issue.
- When `yarn dev` is run, `NODE_ENV` is set as 'dev' by `cross-env`. Then, once `node` is run, it executes `ts-node` following nodemon.json.