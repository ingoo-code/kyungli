const express = require('express');
const router = express.Router();
const controller = require('./user.controller');

router.use('/login',controller.login);
router.use('/join',controller.join);

module.exports = router;