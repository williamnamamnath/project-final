'use strict';

const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser"); 

const { createUser, userLogin } = require("./handlers");

const PORT = process.env.PORT || 4000;
const app = express();


app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Methods',
      'OPTIONS, HEAD, GET, PUT, POST, DELETE'
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });

app.use(morgan('tiny'));
app.use(express.static('./server/assets'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', express.static(__dirname + '/'));
app.use(bodyParser.json()); 

//handler functions
app.post("/signup", userLogin);
app.post("/login", createUser);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
