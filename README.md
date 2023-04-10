# Age of Sigmar Army Sheet

This web app will load army profiles, and display them on a page.

Stuff to do:

- Ability colours could be clearer.
- filter weapons per profile.
- sorting of units by type.
- Battalions.
- add icons for phases
- Command ability table?
- add warning when units or abilities aren't found
- Add additional phase table for non phase based abilities, like saving, on death.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Backend

This uses a thin.dev as a backend which is just an API wrapper around a Postgresql DB.

Use the following to clear the main tables.
```postgres
truncate weapons, phase_rule, ability, units;
```