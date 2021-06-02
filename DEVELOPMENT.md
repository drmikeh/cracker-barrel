# Development

## Objectives

* Ensure that all commits have code formatted to a consistent specification and common coding mistakes are avoided
    - uses Prettier and ESLint with airbnb base and some minor customizations
    - uses Husky to share pre-commit hook
* Ensure all commits pass unit testing
    - uses `jest` for unit testing
    - uses a `test` database to not collide with `dev` database
    - uses Husky with pre-commit hook
## Project Setup and Dependencies

```shell
yarn init -y
yarn add -D prettier
yarn add -D eslint-config-prettier eslint-plugin-prettier
npx install-peerdeps --dev eslint-config-airbnb
yarn add -D husky
```

## New Config Files

* `.prettierrc`
* `.prettierignore`
* `.eslintrc`


## VS Code Plugins

* Prettier - Code formatter
* ESLint
* Formatting Toggle

