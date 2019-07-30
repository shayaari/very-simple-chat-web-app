# Getting Started
In order to get started on this project, you will need a handful of tools available on your computer.
 If you get fatal errors at any step in the process, stop and debug before continuing.

Install the front end packages needed for development.

`npm i`

Rebuild sass, because npm is weird about automatically rebuilding some dev dependencies for performance reasons.

`npm rebuild node-sass`

And now you should be good to go, from a package installation standpoint.

# Available Scripts
In this project directory, you can run:

### `npm install`
Run the package installer to download and install packages required to run this application.

### `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3030](http://localhost:3030) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run lint`
Launches the linter, using a slightly modified version of AirBnb standard.<br>

### `npm run build`
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `IMPORTANT NOTES 1'
please run `very-simple-chat-server-api` project before using the app.

### `IMPORTANT NOTES 2`
getServerHostUrl() function on /src/config.js
detect the server url to call API request
if the app couldn't call server api
simply change it to http://localhost:3000/
or to Your Network IP address (exmp: http://10.0.0.5:3030/)

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.




