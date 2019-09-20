const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const program = express();

//Bodyparser Middleware
program.use (bodyParser.json());



