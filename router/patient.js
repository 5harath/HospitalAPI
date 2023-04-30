const express = require('express');
const router = express.Router();
const auth = require('../config/auth');
const patient = require('../controller/patient');
router.post('/register',patient.register);
module.exports = router;