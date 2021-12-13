# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `Launch "DB server" with json-server`

Keep in the main folder (modify or create) the db.json file, install the [json-server](https://www.npmjs.com/package/json-server#alternative-port) library globally with:

### `npm i -g json-server`

Then, open a new terminal and run the server (in port 3004):
### `json-server --watch db.json --port 3004`