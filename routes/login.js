const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');

const router = express.Router();

router.get('/', function(req, res, next) {
    res.send(200);
});


module.exports = router;