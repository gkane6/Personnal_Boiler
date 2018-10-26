const express = require('express');
const app = express();
const path= require('path')

const morgan = require('morgan');
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, './public')));


const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*
// server.js
app.use('/api', require('./apiRoutes')); // matches all requests to /api

// apiRoutes/index.js
const router = require('express').Router();

router.use('/users', require('./users')); // matches all requests to /api/users/
router.use('/puppies', require('./puppies')); // matches all requests to  /api/puppies/
router.use('/kittens', require('./kittens')); // matches all requests to  /api/kittens/

// apiRoutes/puppies.js
const router = require('express').Router();

// matches GET requests to /api/puppies/
router.get('/', function (req, res, next) { /* etc */ //});
// matches POST requests to /api/puppies/
//router.post('/', function (req, res, next) { /* etc */ //});
// matches PUT requests to /api/puppies/:puppyId
//router.put('/:puppyId', function (req, res, next) { /* etc */ //});
// matches DELETE requests to /api/puppies/:puppyId
//router.delete('/:puppyId', function (req, res, next) { /* etc */ //});
/*
module.exports = router;

module.exports = router;
*/
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'))
});

const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
app.listen(port, function () {
  console.log("Knock, knock");
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
});
