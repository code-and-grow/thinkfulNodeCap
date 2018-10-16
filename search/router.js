'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/search.html');
});

module.exports = { router };