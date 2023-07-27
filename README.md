# Warning - Translate API fails in live demo (error 429, too many requests)

# Home Screen

<img width="1510" alt="Home Screen" src="https://github.com/matthewlow04/recipe-app/assets/105395794/e02fba3a-9f33-4ff0-a476-e69582edbc43">

# Generate Random Recipe

https://github.com/matthewlow04/FastBreak/assets/105395794/61d12695-4bf0-49de-8904-00cdb720d80d

# Prerequisite Installations

Run these in the terminal: 

### `npm install axios`

### `npm install react-router-dom`

To use the Spoonacular api, create an account an get an api key. Insert it in the api key string in Random.js
<img width="560" alt="Screenshot 2023-07-27 at 2 21 05 AM" src="https://github.com/matthewlow04/recipe-app/assets/105395794/0bb03790-7aab-445a-8cf4-d6d8dba078e6">
# Design Decisions

Integrating the translate api proved to be the toughest part as the fetched data from the recipe api was difficult to work with. I initially wanted to add a footer with the translate options but opted not to as my code got more complicated (passing data back in forth). I ended up doing most of the work in one file (Random.js) though I kept it pretty structured. I used axios to simplify the api calls as well as router to be able to navigate between pages. I made sure to keep the UI nice and clean to improve readibility and ensure that all the functions were easy to use (my emphasis on easy use is why I added a home page with instructions). Overall this project was hard at times but proved to be an overall fun challenge! 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



