# Tigrinya Quran Web App

This app contains react web app of Tigrinya translated quran app


![Drag Racing](public/designs/site-5.png)

<p align=center>
for details about the design view 
<a href="https://www.figma.com/file/nEr2GpDEvYUFXJ3lB3w9AM/quran-web-app?type=design&node-id=0%3A1&mode=design&t=Hthdqn0weZpUkfwx-1">here</a>  
</center>

## Install dependencies  

Install docker as it is a pre-request for developing and interacting with the app, for further details visit:  

  https://docs.docker.com/engine/install/

## Prepare for development  

1. clone backend api repo
   
   ```sh  
   git clone git@github.com:fuzumoe/tigrigna-quran-api.git  
   ```  

2. go to the cloned repo and build the api image
   
   ```sh
   cd  path-to-tigrigna-quran-api 
   docker-compose build
   docker-compose up -d
   docker compose run app npm run migrate
   cd -
   ```  

for detail about the api view the readme file in the api repo.

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
