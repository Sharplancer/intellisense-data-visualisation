# Intellisense Data Visualisation

### [Click here to visit live website](https://intellisense-data-visualisation.vercel.app/)

## Used Technologies
- React 18
- TypeScript
- Redux
- Saga
- Axios
- D3
- Chart.js
- Tailwind
- Hooks

## Infrastructure

```
-src
    |-api
        |-index.ts      // using axios method to make a api request - called by saga
    |-components
        |-Table.tsx             //a table
        |-LineGraphD3.tsx       //a linegraph using d3
        |-LineGraphChart.tsx    //a linegraph using chart.js
    |-pages
        |-Home.tsx      //home component for showing components for table and linegraphs
    |-store
        |-index.ts      //configurates redux store
        |-saga.ts       //connects saga functions and reducers
        |-slices
            |-referenciaSlice.ts    //a reducer for referencia data
        |-saga
            |-referenciaSaga.ts     //a saga for calling referencia api

```

## Running the app on your local

1. Clone the project from Github

    ```
    git clone https://github.com/Sharplancer/intellisense-data-visualisation.git
    ```

2. Install node modules for the project
    ```
    npm install
    ```

3. Run the project
    ```
    npm start run
    ```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
