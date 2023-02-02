# Boilerplate for React client / Vite + Express + TypeScript

- `yarn`: to use workspace.
- `vite`: seriously, you muse try this instead of CRA.
- `typescript` is used to make TypeScript environment for Yarn Berry.
- `concurrently` is for running client, server at the same time.

## How to use it

- `clone` or `download` or whatever you want to do.
- `yarn` and then, `yarn dlx @yarnpkg/sdks vscode`.(if you are using VSCode)
- If you get an error <u>module not found</u> [update your Yarn](https://yarnpkg.com/getting-started/install).

## Server

- `ts-node` is only for development due to the performance issue.
- When `yarn dev` is run, `NODE_ENV` is set as 'dev' by `cross-env`. Then, once `node` is run, it executes `ts-node` following nodemon.json.

## Updates

- 02/02/23: Upgrade packages version.