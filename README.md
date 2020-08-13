# React-Express-start
React-Express-start is Boilerplate code for a react-express app ready to upload to your favorite hosting.

## Installation
Use the package manager [npm](https://www.npmjs.com/) to install all dependencies.

```bash
# open terminal on root folder

$ npm install
$ cd server && npm install
$ cd .. 
$ cd client && npm install
```

## Warning!
Currently development command does not work you have to build the frontend to run ```npm run dev``` or comment this section out in [server/app.js](https://github.com/OfficialPedroDimasPortfolio/React-Express-start/blob/master/server/app.js) 
```
app.get('/*', (req, res) => {
  console.log("Redirecting")
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
```
<b>and</b>
put ```"proxy":"http://localhost:5000",``` in [client/package.json](https://github.com/OfficialPedroDimasPortfolio/React-Express-start/blob/master/client/package.json)


## Usage

This specific project is ment for heroku deply, you can change it by replacing ```"heroku-postbuild"``` to just  ```build``` in the [main package.json](https://github.com/OfficialPedroDimasPortfolio/React-Express-start/blob/master/package.json)

To run in development just go to the root directory and type ```npm run dev```.<b>broken</b><br /> 
To run just the server, go to the root directory and type ```npm run server``` which will run nodemon.<br />
To run just the react part (frontend), go to the root drectory and type ```npm run client```.

<b>Make sure you followed the steps in instalation otherwise you will have errors!</b>

## License
[MIT](https://choosealicense.com/licenses/mit/)
