# ESLint TypeScript custom rule
This is an example of an ESLint custom rule written with TypeScript

## How to test it
- Run `npm install` to install the dependencies
- Run `npm run build --workspace=eslint-plugin-custom-rules` to build the custom plugin
- Run `npm run lint --workspace=my-app` to see the errors from the custom rule
- Run `npm run test --workspace=my-app` to test the linter programmatically