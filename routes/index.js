'use strict';

const express = require('express');
const router = express.Router();

const api = require('./api');
const hello = require('./hello');
const index = require('./home');
const secret = require('./secret');
const contactRT = require('./contactRoutes');
const sendphotoRT = require('./sendPhotoRoutes');
const random = require('./random');

router.use(api);
router.use(hello);
router.use(index);
router.use(secret);
router.use(contactRT);
router.use(sendphotoRT);
router.use(random);


module.exports = router;

