# Bitcoin IRA coding exercise

## React Code Challenge
The intent of this assignment is to evaluate your front-end design, development, and testing skills. Please approach it as if you were assigned it as part of your daily work. To complete it, you will need to provide a working application with tests.
React should be the UI Library (this is the React code challenge, after all) but other than that feel free to use any supporting libraries or frameworks. JavaScript and Typescript are both acceptable. Utilize, json-server package and provided json db schema as the back-end for this exercise. 
## Part 1 - Getting Started
Create a multi-step registration form to capture user information and store in provided json-server database. On submit, display a list of all users.

### Step 1:
    • First Name
    • Last Name
    • Email
### Step 2:
    • City
    • Country
### Step 3:
    • Date of Birth
    • Mobile Number
    • Submit button
## Part 2 - Rewriting History
Users may want to go back to verify or update information. Add a "Back" button to allow users to navigate to previous steps while preserving their previous input.

## Part 3 - Extra Credit
These are optional. Feel free to tackle any of these depending on your remaining time:
    • Add basic validation for email and password
    • Display of form progress status during the registration 
  
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
