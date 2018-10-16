'use strict';
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/profile.html');
});

router.get('/list', (req, res) => {
  res.sendFile(__dirname + '/list.html');
});

module.exports = { router };