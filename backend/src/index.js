const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/chat',
{ useNewUrlParser: true, useUnifiedTopology: true });
requireDir('./models');

const routes = require('./routes');

app.use(routes);

app.listen(3333);