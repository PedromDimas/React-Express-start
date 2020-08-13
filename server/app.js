const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));//to serve react

//all api routes above the '/*'!!!!!

app.get('/api/hello', (req,res) =>{
  res.send("Hello World!");
});

//members api routes
//app.use('/api/users', require('./routes/api/users'));


//This onhe is last!!!!!!!
app.get('/*', (req, res) => {
  console.log("Redirecting")
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));

