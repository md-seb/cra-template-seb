# cra-template-seb

This is an enhanced template for [Create React App](https://github.com/facebook/create-react-app).

It provides decent out of the box developer experience, while enforcing code quality 
and basic security by integrating `.editorconfig`, `prettier`, `eslint`, `jest` 
together with JSX, React and Hooks extensions.

## Quick start

Clone this repo into a local folder.

`cd /path/to/your/projects`

`npx create-react-app your-app --template file:/path/to/this/template/folder`

`cd /path/to/your/projects/your-app`

## Development

`npm start`

Runs the app in development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.
You will see the build errors and lint warnings in the console.

## Testing

This template has `jest` test watcher running in the background.

You should see `Jest` status in Visual Studio Code.

`npm test`

Runs the test watcher in an interactive mode.

By default, runs tests related to files changed since the last commit.

[Read more about testing.](https://facebook.github.io/create-react-app/docs/running-tests)

## Production build

`npm run build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

## Formatting

This template integrates `prettier` formatter to watch as you type and also format the file on save.

You should see `Prettier` status in Visual Studio Code.

`npm run format`

Formats all .js, .jsx and .css files in src folder. Automatically fixes all formatting issues.

## Linting

This template integrates `eslint` to watch as you type and provide suggestions for fixing your code.

There are several custom rules to warn about React and Hooks problems.

You should see `ESlint` status in Visual Studio Code.

`npm run lint`

Lints all .js and .jsx files in src folder.

`npm run lint-fix`

Lints all .js and .jsx files in src folder. Fixes all fixable errors.

## Bundle analysis

`npm run analyze`

Uses [source-map-explorer](https://www.npmjs.com/package/source-map-explorer) to analyze JavaScript (or Sass or LESS) code bloat through source maps.

This will open up a a treemap visualization of how the space is used in your minified bundle

## Official create-react-app documentation

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.
