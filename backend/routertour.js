const {postdestination , getdestination , postpackages , getpackages} = require('./tourcontoller')
const express = require('express');
const router = express.Router();

router.post('/destination', postdestination);
router.get('/destination', getdestination);

router.post('/packages', postpackages);
router.get('/packages', getpackages);

module.exports = router;