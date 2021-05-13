const express = require('express');
const router = express.Router();
const main = require('./main')

router.get('/',main);

module.exports = router;